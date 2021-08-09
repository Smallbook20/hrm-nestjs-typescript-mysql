import { Module } from '@nestjs/common';
import { ScreensController } from './screens.controller';
import { ScreensService } from './screens.service';
import { screensProviders } from './screens.providers';
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
  controllers: [ScreensController],
  providers: [ScreensService, ...screensProviders],
})
export class ScreensModule {}
