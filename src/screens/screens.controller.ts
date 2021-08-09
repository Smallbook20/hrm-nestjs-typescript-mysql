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
import { ScreensService } from './screens.service';
import { QueryParam } from '../const/queryParam';
import { CreateScreenDto } from './dto/createScreen.dto';
import { UpdateScreenDto } from './dto/updateScreen.dto';
import { RequestDto } from '../middlewares/dto/request.dto';

@Controller('screens')
export class ScreensController {
  constructor(private screensService: ScreensService) {}

  //get all screen with pagging
  @Get('')
  findAll(@Query() query: QueryParam) {
    return this.screensService.findAll(query.currentPage, query.pageSize);
  }

  //get screen by id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.screensService.findOne(id);
  }

  //create new screen
  @Post()
  create(@Body() body: CreateScreenDto, @Req() req: RequestDto) {
    return this.screensService.create(body, req);
  }

  //delete screen by update isDelete = 1
  @Patch('/delete/:id')
  deleteScreen(@Param('id') id: string) {
    return this.screensService.deleteScreen(id);
  }

  //update screen by id
  @Patch('/update/:id')
  update(
    @Param('id') id: string,
    @Body() body: UpdateScreenDto,
    @Req() req: RequestDto,
  ) {
    return this.screensService.update(body, id, req);
  }
}
