import { Injectable, Inject } from '@nestjs/common';
import { User } from './users.entity';
import { CreateUserDto } from './dto/createUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { RequestDto } from '../middlewares/dto/request.dto';
import { JwtService } from '@nestjs/jwt';
import { TokenDto } from '../roles/dto/tokenDto';
@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: typeof User,
    private jwtService: JwtService,
  ) {}

  //get all user with pagging
  async findAll(currentPage: string, pageSize: string): Promise<User[]> {
    const page = parseInt(currentPage);
    const size = parseInt(pageSize);
    return this.usersRepository.findAll({
      limit: size,
      offset: (page - 1) * size,
      where: {
        isDelete: 0,
      },
    });
  }

  //get user by id
  async findOne(id: string): Promise<User> {
    return this.usersRepository.findOne({
      where: {
        id,
        isDelete: 0,
      },
    });
  }

  //create new user
  async createNewUser(
    createUserDto: CreateUserDto,
    req: RequestDto,
  ): Promise<User> {
    try {
      //get token in request.header
      const token = req.header('token');
      const payload: TokenDto = await this.jwtService.verifyAsync(token); //verify token to get userId
      createUserDto.createBy = payload.userId;
      createUserDto.updateBy = payload.userId;
      createUserDto.isDelete = 0;
      return await this.usersRepository.create<User>(createUserDto);
    } catch (error) {
      throw error;
    }
  }

  //detele user by update isDelete = 1
  async deleteUser(id: string): Promise<any> {
    try {
      let check = false;
      const userTemp = await this.usersRepository.findOne({
        where: {
          id,
          isDelete: 0,
        },
      });
      if (userTemp) {
        userTemp.isDelete = 1;
      }
      if (!check && (await userTemp.save())) {
        check = true;
      }

      if (!check) {
        return {
          message: `Can not delete this user`,
        };
      }
      return {
        message: `Delete success`,
      };
    } catch (error) {
      throw error;
    }
  }

  //update user by id
  async update(
    updateUserDto: UpdateUserDto,
    id: string,
    req: RequestDto,
  ): Promise<any> {
    try {
      //get token in request.header
      const token = req.header('token');
      const payload: TokenDto = await this.jwtService.verifyAsync(token); //verify token to get userId
      const condition = { where: { id: id, isDelete: 0 } };
      const userTemp: User = await this.usersRepository.findOne({
        where: {
          id,
          isDelete: 0,
        },
      });
      updateUserDto.id = id;
      updateUserDto.updateBy = payload.userId;
      if (userTemp) {
        const userUpdate = await this.usersRepository.update(
          updateUserDto,
          condition,
        );
        if (!userUpdate[0]) {
          return {
            message: `Can not update this user`,
          };
        }
        return {
          message: `Update success`,
        };
      }
      return {
        message: `Can not update this user`,
      };
    } catch (error) {
      throw error;
    }
  }
}
