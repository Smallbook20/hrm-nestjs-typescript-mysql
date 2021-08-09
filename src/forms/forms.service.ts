import { Injectable, Inject } from '@nestjs/common';
import { FORM_STATUS } from '../const/formStatus.enum';
import { CreateFromDto } from './dto/createFrom.dto';
import { Form } from './forms.entity';
import { UpdateFromDto } from './dto/updateForm.dto';
import { SubmitFormDto } from './dto/submitForm.dto';
import { ApproveFormDto } from './dto/approveForm.dto';
import { CloseFormDto } from './dto/closeForm.dto';
import { ReportFormDto } from './dto/reportFrom.dto';
import { MailService } from '../mail/mail.service';
import { User } from '../users/users.entity';
import { RequestDto } from '../middlewares/dto/request.dto';

@Injectable()
export class FormsService {
  constructor(
    @Inject('FORMS_REPOSITORY')
    private formsRepository: typeof Form,
    private mailService: MailService,
  ) {}

  //get all form with pagging
  async findAll(currentPage: string, pageSize: string): Promise<Form[]> {
    try {
      const page = parseInt(currentPage);
      const size = parseInt(pageSize);
      return this.formsRepository.findAll({
        limit: size,
        offset: (page - 1) * size,
        where: {
          isDelete: 0,
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  //get form by id
  async findOne(id: string): Promise<Form> {
    try {
      return this.formsRepository.findOne({
        where: {
          id,
          isDelete: 0,
        },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  //create new form
  async create(createFormDto: CreateFromDto, req: RequestDto): Promise<any> {
    try {
      const listEmail: string[] = [];
      createFormDto.isDelete = 0;
      createFormDto.status = FORM_STATUS.NEW;
      createFormDto.createBy = req.userId;
      createFormDto.updateBy = req.userId;
      const userIdArray = createFormDto.userId;
      const listUser = await User.findAll({
        where: {
          id: userIdArray,
          isDelete: 0,
        },
      });
      if (listUser.length) {
        listUser.forEach((e) => {
          listEmail.push(e.email);
        });
      }

      for (const x in userIdArray) {
        createFormDto.userId = userIdArray[x];
        await this.formsRepository.create(createFormDto);
      }
      const subject = `[Annoucement] ${createFormDto.typeOf} form for employee`;
      const body = `You have a new ${createFormDto.typeOf} form, Let's finish`;
      await this.mailService.sendNotificationMail(listEmail, subject, body);
      return {
        message: `Create success`,
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  //delete form by update isDelete = 1
  async deleteFrom(id: string): Promise<any> {
    try {
      const Temp = await this.formsRepository.findOne({
        where: {
          id,
          isDelete: 0,
        },
      });
      if (!Temp) {
        return {
          message: `Can not delete this role`,
        };
      }
      Temp.isDelete = 1;
      await Temp.save();
      return {
        message: `Delete success`,
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  //update form by id
  async update(
    updateFormDto: UpdateFromDto,
    id: string,
    req: RequestDto,
  ): Promise<any> {
    try {
      const condition = { where: { id: id, isDelete: 0 } };
      const Temp = await this.formsRepository.findOne({
        where: {
          id,
          isDelete: 0,
        },
      });
      if (!Temp) {
        return {
          message: `Can not update this role`,
        };
      }
      updateFormDto.id = id;
      updateFormDto.updateBy = req.userId;
      await this.formsRepository.update(updateFormDto, condition);
      return {
        message: `Update success`,
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  //submit form
  async submit(
    updateFormDto: SubmitFormDto,
    id: string,
    req: RequestDto,
  ): Promise<any> {
    try {
      const condition = { where: { id: id, isDelete: 0 } };
      const Temp = await this.formsRepository.findOne({
        where: {
          id,
          isDelete: 0,
        },
      });
      if (!Temp) {
        return {
          message: `Can not submit this form`,
        };
      }
      updateFormDto.id = id;
      updateFormDto.updateBy = req.userId;
      updateFormDto.status = FORM_STATUS.PENDING_APPROVE;
      await this.formsRepository.update(updateFormDto, condition);
      return {
        message: `Submit success`,
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  //approve form
  async approve(
    updateFormDto: ApproveFormDto,
    id: string,
    req: RequestDto,
  ): Promise<any> {
    try {
      const condition = { where: { id: id, isDelete: 0 } };
      const Temp = await this.formsRepository.findOne({
        where: {
          id,
          isDelete: 0,
        },
      });
      if (!Temp) {
        return {
          message: `Can not approve this form`,
        };
      }
      updateFormDto.id = id;
      updateFormDto.updateBy = req.userId;
      updateFormDto.status = FORM_STATUS.APPROVED;
      await this.formsRepository.update(updateFormDto, condition);
      return {
        message: `Approve success`,
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  //close form
  async close(
    updateFormDto: CloseFormDto,
    id: string,
    req: RequestDto,
  ): Promise<any> {
    try {
      const condition = { where: { id: id, isDelete: 0 } };
      const Temp = await this.formsRepository.findOne({
        where: {
          id,
          isDelete: 0,
        },
      });
      if (!Temp) {
        return {
          message: `Can not close this form`,
        };
      }
      updateFormDto.id = id;
      updateFormDto.updateBy = req.userId;
      updateFormDto.status = FORM_STATUS.CLOSED;
      await this.formsRepository.update(updateFormDto, condition);
      return {
        message: `Close success`,
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  //get report about form
  async getReport(reportDto: ReportFormDto): Promise<any> {
    try {
      const FormReport = await this.formsRepository.findAll({
        where: {
          typeOf: reportDto.typeOf,
          status: reportDto.status,
          isDelete: 0,
        },
      });
      const listUserId: string[] = [];
      FormReport.forEach((e) => {
        listUserId.push(e.userId);
      });
      return {
        number: FormReport.length,
        userId: listUserId,
      };
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
