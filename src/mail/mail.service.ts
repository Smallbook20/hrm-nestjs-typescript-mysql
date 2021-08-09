import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { MailConfig } from '../config/mailer.config';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}
  async sendNotificationMail(
    to: string | string[],
    subject: string,
    content: string,
  ) {
    await this.mailerService.sendMail({
      from: MailConfig.user,
      to: to,
      subject: subject,
      text: content,
    });
  }
}
