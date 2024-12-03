import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { AuthorizationModule } from './modules/authorization/authorization.module';
import { SharedModule } from './modules/shared/shared.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    UserModule,
    AuthorizationModule,
    SharedModule,
    RouterModule.register([
      {
        path: 'authorization',
        module: AuthorizationModule,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
