import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailConfig } from '../config/mailer.config';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: MailConfig.host,
        secure: false,
        service: 'gmail',
        auth: {
          user: MailConfig.user,
          pass: MailConfig.pass,
        },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
