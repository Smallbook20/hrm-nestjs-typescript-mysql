import { Module } from '@nestjs/common';
import { UserrolesController } from './userroles.controller';
import { UserrolesService } from './userroles.service';
import { userrolesProviders } from './userroles.providers';
import { DatabaseModule } from '../database/database.modules';
import { JwtModule } from '@nestjs/jwt';
import { jwtConst } from '../const/auth.const';

@Module({
  imports: [
    DatabaseModule,
    JwtModule.register({
      secret: jwtConst.secret,
      signOptions: { expiresIn: '86400s' },
    }),
  ],
  controllers: [UserrolesController],
  providers: [UserrolesService, ...userrolesProviders],
})
export class UserrolesModule {}
