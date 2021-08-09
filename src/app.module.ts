import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AccountsModule } from './accounts/accounts.module';
import { UserrolesModule } from './userroles/userroles.module';
import { RolesModule } from './roles/roles.module';
import { RolepermissionsModule } from './rolepermissions/rolepermissions.module';
import { FormsModule } from './forms/forms.module';
import { ScreensModule } from './screens/screens.module';
import { AuthModule } from './auth/auth.module';
import { MailModule } from './mail/mail.module';
@Module({
  imports: [
    UsersModule,
    AccountsModule,
    UserrolesModule,
    RolesModule,
    RolepermissionsModule,
    FormsModule,
    ScreensModule,
    AuthModule,
    MailModule,
  ],
})
export class AppModule {}
