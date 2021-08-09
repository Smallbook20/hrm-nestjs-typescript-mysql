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
import { FormsService } from './forms.service';
import { QueryParam } from '../const/queryParam';
import { CreateFromDto } from './dto/createFrom.dto';
import { UpdateFromDto } from './dto/updateForm.dto';
import { SubmitFormDto } from './dto/submitForm.dto';
import { ApproveFormDto } from './dto/approveForm.dto';
import { CloseFormDto } from './dto/closeForm.dto';
import { ReportFormDto } from './dto/reportFrom.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RequestDto } from '../middlewares/dto/request.dto';

@Controller('forms')
export class FormsController {
  constructor(private formsService: FormsService) {}

  //get all form with pagging
  @UseGuards(JwtAuthGuard)
  @Get('/all')
  findAll(@Query() query: QueryParam) {
    return this.formsService.findAll(query.currentPage, query.pageSize);
  }

  //get form by id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.formsService.findOne(id);
  }

  //create new forms
  @Post()
  create(@Body() body: CreateFromDto, @Req() req: RequestDto) {
    return this.formsService.create(body, req);
  }

  //delete form by update isDelete = 1;
  @Patch('/delete/:id')
  deleteForm(@Param('id') id: string) {
    return this.formsService.deleteFrom(id);
  }

  //update form by id
  @Patch('/update/:id')
  update(
    @Param('id') id: string,
    @Body() body: UpdateFromDto,
    @Req() req: RequestDto,
  ) {
    return this.formsService.update(body, id, req);
  }

  //submit form
  @Patch('/submit/:id')
  submitForm(
    @Param('id') id: string,
    @Body() body: SubmitFormDto,
    @Req() req: RequestDto,
  ) {
    return this.formsService.submit(body, id, req);
  }

  //approve form
  @Patch('/approve/:id')
  approveForm(
    @Param('id') id: string,
    @Body() body: ApproveFormDto,
    @Req() req: RequestDto,
  ) {
    return this.formsService.approve(body, id, req);
  }

  //close form
  @Patch('/close/:id')
  closeForm(
    @Param('id') id: string,
    @Body() body: CloseFormDto,
    @Req() req: RequestDto,
  ) {
    return this.formsService.close(body, id, req);
  }

  //get report about form
  @Get()
  getReport(@Body() body: ReportFormDto) {
    return this.formsService.getReport(body);
  }
}
