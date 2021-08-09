import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { UserrolesService } from './userroles.service';
import { QueryParam } from '../const/queryParam';
import { CreateUserroleDto } from './dto/createUserrole.dto';
import { UpdateUserroleDto } from './dto/updateUserrole.dto';
import { RequestDto } from '../middlewares/dto/request.dto';

@Controller('userroles')
export class UserrolesController {
  constructor(private userrolesService: UserrolesService) {}

  //get all user-role with pagging
  @Get()
  findAll(@Query() query: QueryParam) {
    return this.userrolesService.findAll(query.currentPage, query.pageSize);
  }

  //get user-role by id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userrolesService.findOne(id);
  }

  //create new userrole
  @Post()
  create(@Body() body: CreateUserroleDto, @Req() req: RequestDto) {
    return this.userrolesService.create(body, req);
  }

  //delete userrole by update isDelete = 1
  @Patch('/delete/:id')
  deleteRole(@Param('id') id: string) {
    return this.userrolesService.deleteUserrole(id);
  }

  //update userrole by id
  @Patch('/update/:id')
  update(
    @Param('id') id: string,
    @Body() body: UpdateUserroleDto,
    @Req() req: RequestDto,
  ) {
    return this.userrolesService.update(body, id, req);
  }
}
