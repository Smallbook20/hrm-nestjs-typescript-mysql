import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { FormsController } from './forms.controller';
import { FormsService } from './forms.service';
import { formsProviders } from './forms.providers';
import { DatabaseModule } from '../database/database.modules';
import {
  CheckCanWrite,
  CheckCanRead,
  CheckCanUpdate,
  CheckCanDelete,
  CheckCanApprove,
  CheckCanClose,
  CheckCanGetReport,
  CheckCanSubmit,
  CheckCloseForm,
} from '../middlewares/checkRole.middleware';
import { JwtModule } from '@nestjs/jwt';
import { jwtConst } from '../const/auth.const';
import { MailModule } from '../mail/mail.module';
import { MailService } from '../mail/mail.service';

@Module({
  imports: [
    MailModule,
    DatabaseModule,
    JwtModule.register({
      secret: jwtConst.secret,
      signOptions: { expiresIn: '86400s' },
    }),
  ],
  controllers: [FormsController],
  providers: [FormsService, MailService, ...formsProviders],
})
export class FormsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckCanRead, CheckCanGetReport)
      .forRoutes({ path: '/forms', method: RequestMethod.GET }); //check permission can get report
    consumer
      .apply(CheckCanRead)
      .forRoutes({ path: '/forms/*', method: RequestMethod.GET }); //check permission can read form normally
    consumer
      .apply(CheckCloseForm, CheckCanWrite)
      .forRoutes({ path: '/forms*', method: RequestMethod.POST });
    consumer
      .apply(CheckCanUpdate, CheckCanSubmit)
      .forRoutes({ path: '/forms/submit*', method: RequestMethod.PATCH });
    consumer
      .apply(CheckCanUpdate, CheckCanClose)
      .forRoutes({ path: '/forms/close*', method: RequestMethod.PATCH });
    consumer
      .apply(CheckCanDelete)
      .forRoutes({ path: '/forms/delete*', method: RequestMethod.PATCH });
    consumer
      .apply(CheckCanApprove)
      .forRoutes({ path: '/forms/approve*', method: RequestMethod.PATCH });
  }
}
