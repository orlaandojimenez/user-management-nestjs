import { Module } from '@nestjs/common';
import { UserDataAccessService } from './data-access/user-data-access.service';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  providers: [UserDataAccessService],
})
export class UserModule {}
