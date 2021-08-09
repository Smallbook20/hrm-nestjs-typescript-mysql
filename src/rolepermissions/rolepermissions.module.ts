import { Module } from '@nestjs/common';
import { RolepermissionsController } from './rolepermissions.controller';
import { RolepermissionsService } from './rolepermissions.service';
import { rolepermissionsProviders } from './rolepermissions.providers';
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
  controllers: [RolepermissionsController],
  providers: [RolepermissionsService, ...rolepermissionsProviders],
})
export class RolepermissionsModule {}
