import { Module } from '@nestjs/common';
import { RoleDataAccessService } from './data-access/role-data-access.service';
import { PermisisonDataAccessService } from './data-access/permission-data-access.service';
import { PermissionController } from './api-controllers/permission/permission.controller';
import { PermissionService } from './business/permission/permission.service';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [SharedModule],
  controllers: [PermissionController],
  providers: [
    RoleDataAccessService,
    PermisisonDataAccessService,
    PermissionService,
  ],
})
export class AuthorizationModule {}
