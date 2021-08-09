import { Injectable, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TokenDto } from '../roles/dto/tokenDto';
import { RequestDto } from '../middlewares/dto/request.dto';
import { CreateUserroleDto } from './dto/createUserrole.dto';
import { UpdateUserroleDto } from './dto/updateUserrole.dto';
import { Userrole } from './userroles.entity';

@Injectable()
export class UserrolesService {
  constructor(
    @Inject('USERROLES_REPOSITORY')
    private userrolesRepository: typeof Userrole,
    private jwtService: JwtService,
  ) {}

  //get all user-role with pagging
  async findAll(currentPage: string, pageSize: string): Promise<Userrole[]> {
    const page = parseInt(currentPage);
    const size = parseInt(pageSize);
    return this.userrolesRepository.findAll({
      limit: size,
      offset: (page - 1) * size,
      where: {
        isDelete: 0,
      },
    });
  }

  //get user-role by id
  async findOne(id: string): Promise<Userrole> {
    return this.userrolesRepository.findOne({
      where: {
        id,
        isDelete: 0,
      },
    });
  }

  //create new user-role
  async create(
    createUserroleDto: CreateUserroleDto,
    req: RequestDto,
  ): Promise<Userrole> {
    try {
      //get token in request.header
      const token = req.header('token');
      const payload: TokenDto = await this.jwtService.verifyAsync(token); //verify token to get userId
      createUserroleDto.createBy = payload.userId;
      createUserroleDto.updateBy = payload.userId;
      createUserroleDto.isDelete = 0;
      return await this.userrolesRepository.create(createUserroleDto);
    } catch (error) {
      throw error;
    }
  }

  //delete userrole by update isDelete = 1
  async deleteUserrole(id: string): Promise<any> {
    const Temp = await this.userrolesRepository.findOne({
      where: {
        id,
        isDelete: 0,
      },
    });
    if (!Temp) {
      return {
        message: `Can not delete this user-role`,
      };
    }
    Temp.isDelete = 1;
    await Temp.save();
    return {
      message: `Delete success`,
    };
  }

  //update userrole by id
  async update(
    updateUserroleDto: UpdateUserroleDto,
    id: string,
    req: RequestDto,
  ): Promise<any> {
    try {
      //get token in request.header
      const token = req.header('token');
      const payload: TokenDto = await this.jwtService.verifyAsync(token); //verify token to get userId
      const condition = { where: { id: id, isDelete: 0 } };
      const Temp = await this.userrolesRepository.findOne({
        where: {
          id,
          isDelete: 0,
        },
      });
      if (!Temp) {
        return {
          message: `Can not update this user-role`,
        };
      }
      updateUserroleDto.id = id;
      updateUserroleDto.updateBy = payload.userId;
      await this.userrolesRepository.update(updateUserroleDto, condition);
      return {
        message: `Update success`,
      };
    } catch (error) {
      throw error;
    }
  }
}
