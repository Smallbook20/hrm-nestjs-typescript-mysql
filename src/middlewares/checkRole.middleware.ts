import { Request, Response, NextFunction } from 'express';
import { Rolepermission } from '../rolepermissions/rolepermissions.entity';
import { Role } from '../roles/roles.entity';
import { Userrole } from '../userroles/userroles.entity';
import { JwtService } from '@nestjs/jwt';
import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TokenDto } from '../roles/dto/tokenDto';
import { RoleCheckDto } from './dto/roleCheck.dto';
import { RequestDto } from './dto/request.dto';
import { Form } from '../forms/forms.entity';
import { FORM_STATUS } from '../const/formStatus.enum';
import { CreateFromDto } from '../forms/dto/createFrom.dto';
import { ROLE } from '../const/role.const';

//get permission of user from userId in token
export async function getRolePermission(id: string) {
  //check role through Userrole table include Role and Rolepermission table
  const roleCheck: RoleCheckDto[] = await Userrole.findAll({
    where: {
      userId: id,
      isDelete: 0,
    },
    include: {
      model: Role,
      include: [Rolepermission],
    },
  });
  return roleCheck;
}

//check permission can write
@Injectable()
export class CheckCanWrite implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  async use(req: RequestDto, res: Response, next: NextFunction) {
    try {
      //get token in request.header
      const token = req.header('token');
      const payload: TokenDto = await this.jwtService.verifyAsync(token); //verify token to get userId
      const roleCheck = await getRolePermission(payload.userId);
      let check = false;
      for (const x in roleCheck) {
        if (
          !check &&
          roleCheck[x].role.rolepermission.canWrite &&
          req.originalUrl.startsWith(roleCheck[x].role.rolepermission.url) //check permission about screen through req.url
        ) {
          check = true;
        }
      }
      if (!check) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Permission deny',
          },
          403,
        );
      } else {
        req.userId = payload.userId; //return a userId to response to update createBy, updateBy fields
        next();
      }
    } catch (error) {
      throw error;
    }
  }
}

//check permission can read
@Injectable()
export class CheckCanRead implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  async use(req: RequestDto, res: Response, next: NextFunction) {
    try {
      //get token in request.header
      const token = req.header('token');
      const payload: TokenDto = await this.jwtService.verifyAsync(token); //verify token to get userId
      const roleCheck = await getRolePermission(payload.userId);
      let check = false;
      const roleName: string[] = [];
      for (const x in roleCheck) {
        //check permission about screen through req.url
        if (req.originalUrl.startsWith(roleCheck[x].role.rolepermission.url)) {
          roleName.push(roleCheck[x].role.roleName);
          if (!check && roleCheck[x].role.rolepermission.canRead) {
            check = true;
          }
        }
      }
      if (!check) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Permission deny',
          },
          403,
        );
      } else {
        req.roleName = roleName;
        req.userId = payload.userId; //return a userId to response to update createBy, updateBy fields
        next();
      }
    } catch (error) {
      throw error;
    }
  }
}

//check permission can update
@Injectable()
export class CheckCanUpdate implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  async use(req: RequestDto, res: Response, next: NextFunction) {
    try {
      //get token in request.header
      const token = req.header('token');
      const payload: TokenDto = await this.jwtService.verifyAsync(token); //verify token to get userId
      const roleCheck = await getRolePermission(payload.userId);
      let check = false;
      const roleName: string[] = [];
      for (const x in roleCheck) {
        //check permission about screen through req.url
        if (req.originalUrl.startsWith(roleCheck[x].role.rolepermission.url)) {
          roleName.push(roleCheck[x].role.roleName);
          if (!check && roleCheck[x].role.rolepermission.canUpdate) {
            check = true;
          }
        }
      }
      if (!check) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Permission deny',
          },
          403,
        );
      } else {
        req.roleName = roleName;
        req.userId = payload.userId; //return a userId to response to update createBy, updateBy fields
        next();
      }
    } catch (error) {
      throw error;
    }
  }
}

//check permission can delete
@Injectable()
export class CheckCanDelete implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  async use(req: RequestDto, res: Response, next: NextFunction) {
    try {
      //get token in request.header
      const token = req.header('token');
      const payload: TokenDto = await this.jwtService.verifyAsync(token); //verify token to get userId
      const roleCheck = await getRolePermission(payload.userId);
      let check = false;
      for (const x in roleCheck) {
        if (
          !check &&
          roleCheck[x].role.rolepermission.canDelete &&
          req.originalUrl.startsWith(roleCheck[x].role.rolepermission.url) //check permission about screen through req.url
        ) {
          check = true;
        }
      }
      if (!check) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Permission deny',
          },
          403,
        );
      } else {
        req.userId = payload.userId; //return a userId to response to update createBy, updateBy fields
        next();
      }
    } catch (error) {
      throw error;
    }
  }
}

//check permission can approve
@Injectable()
export class CheckCanApprove implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  async use(req: RequestDto, res: Response, next: NextFunction) {
    try {
      //get token in request.header
      const id = req.params[0].replace('/', '');
      const token = req.header('token');
      const payload: TokenDto = await this.jwtService.verifyAsync(token); //verify token to get userId
      const roleCheck = await getRolePermission(payload.userId);
      let checkCanApprove = false;
      let checkRole = false;
      for (const x in roleCheck) {
        if (
          !checkCanApprove &&
          roleCheck[x].role.rolepermission.canApprove &&
          req.originalUrl.startsWith(roleCheck[x].role.rolepermission.url) //check permission about screen through req.url
        ) {
          checkCanApprove = true;
        }
      }
      const FormCheck: Form[] = await Form.findAll({
        where: {
          id: id,
          isDelete: 0,
        },
      });
      if (FormCheck.length) {
        for (const x in FormCheck) {
          console.log(FormCheck[x].managerId);
          console.log(payload.userId);
          if (!checkRole && FormCheck[x].managerId === payload.userId) {
            checkRole = true;
          }
        }
      }
      if (!checkCanApprove || !checkRole) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Permission deny',
          },
          403,
        );
      } else {
        req.userId = payload.userId; //return a userId to response to update createBy, updateBy fields
        next();
      }
    } catch (error) {
      throw error;
    }
  }
}

//check permission can close form
@Injectable()
export class CheckCanClose implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  async use(req: RequestDto, res: Response, next: NextFunction) {
    try {
      //get token in request.header
      const token = req.header('token');
      const payload: TokenDto = await this.jwtService.verifyAsync(token); //verify token to get userId
      const roleCheck = await getRolePermission(payload.userId);
      let check = false;
      for (const x in roleCheck) {
        if (!check && roleCheck[x].role.roleName === ROLE.HR) {
          check = true;
        }
      }
      if (!check) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Permission deny',
          },
          403,
        );
      } else {
        next();
      }
    } catch (error) {
      throw error;
    }
  }
}

//check if user have a form not close yet
@Injectable()
export class CheckCloseForm implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = JSON.parse(JSON.stringify(req.body)); //get userId from req.body use JSON.parse
      const FormClose = await Form.findAll({
        where: {
          userId,
          isDelete: 0,
        },
      });
      if (FormClose.length) {
        for (const x in FormClose) {
          //check status of form, if it different close, not next();
          if (FormClose[x].status !== FORM_STATUS.CLOSED) {
            throw new HttpException(
              {
                status: HttpStatus.BAD_REQUEST,
                error: `${FormClose[x].userId} has a form not closed yet`,
              },
              400,
            );
          }
        }
      }
      next();
    } catch (error) {
      throw error;
    }
  }
}

//check permission can get report about form
@Injectable()
export class CheckCanGetReport implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  async use(req: RequestDto, res: Response, next: NextFunction) {
    try {
      //get token in request.header
      const token = req.header('token');
      const payload: TokenDto = await this.jwtService.verifyAsync(token); //verify token to get userId
      const UserRoleTemp = await Userrole.findAll({
        where: {
          userId: payload.userId,
          isDelete: 0,
        },
        include: [Role],
      });
      let check = false;
      const roleName: string[] = [];
      for (const x in UserRoleTemp) {
        roleName.push(UserRoleTemp[x].role.roleName);
        if (
          //check role if it were hr or admin, next();
          !check &&
          (UserRoleTemp[x].role.roleName === ROLE.HR ||
            UserRoleTemp[x].role.roleName === ROLE.ADMIN)
        ) {
          check = true;
        }
      }
      if (!check) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Permission deny',
          },
          403,
        );
      } else {
        req.roleName = roleName;
        next();
      }
    } catch (error) {
      throw error;
    }
  }
}

//check permission can submit form
@Injectable()
export class CheckCanSubmit implements NestMiddleware {
  constructor(private jwtService: JwtService) {}
  async use(req: RequestDto, res: Response, next: NextFunction) {
    try {
      let check = false;
      const id = req.params[0].replace('/', '');
      const FormCheck: CreateFromDto[] = await Form.findAll({
        where: {
          id: id,
          isDelete: 0,
        },
      });
      if (FormCheck.length) {
        for (const x in FormCheck) {
          //check if userId different form.userId find above
          if (!check && FormCheck[x].userId === req.userId) {
            check = true;
          }
        }
      }
      if (!check) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Permission deny',
          },
          403,
        );
      } else {
        next();
      }
    } catch (error) {
      throw error;
    }
  }
}
