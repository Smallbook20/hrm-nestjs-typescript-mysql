import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { QueryParam } from '../const/queryParam';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateAccountDto } from './dto/createAccount.dto';
import { UpdateAccountDto } from './dto/updateAccount.dto';
import { RequestDto } from '../middlewares/dto/request.dto';

@Controller('accounts')
export class AccountsController {
  constructor(private accountsService: AccountsService) {}

  //get all account with pagging
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Query() query: QueryParam) {
    return this.accountsService.findAll(query.currentPage, query.pageSize);
  }

  //get account by id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountsService.findOne(id);
  }

  //create new account
  @Post()
  create(@Body() body: CreateAccountDto, @Req() req: RequestDto) {
    return this.accountsService.create(body, req);
  }

  //delete account by update isDelete = 1
  @Patch('/delete/:id')
  deleteRole(@Param('id') id: string) {
    return this.accountsService.deleteAccount(id);
  }

  //update account by id
  @Patch('/update/:id')
  update(
    @Param('id') id: string,
    @Body() body: UpdateAccountDto,
    @Req() req: RequestDto,
  ) {
    return this.accountsService.update(body, id, req);
  }
}
