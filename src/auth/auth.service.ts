import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AccountsService } from '../accounts/accounts.service';
@Injectable()
export class AuthService {
  constructor(
    private accountsService: AccountsService,
    private jwtService: JwtService,
  ) {}

  //login with username, password in req
  async login(username: string, password: string) {
    const accountLogin = await this.accountsService.findOneAccount(username);
    if (accountLogin) {
      //compare pass in request with hashed password in database
      if (await bcrypt.compare(password, accountLogin.password)) {
        const userId = accountLogin.userId;
        return {
          status: `success`,
          username: accountLogin.username,
          accessToken: this.jwtService.sign({ userId: userId }),
        };
      }
    }
    return {
      message: `username or password is incorrect`,
    };
  }
}
