import { Module } from '@nestjs/common';
import { RoleDataAccessService } from './data-access/role-data-access.service';
import { PrismaService } from 'src/modules/shared/prisma/prisma.service';
import { PermisisonDataAccessService } from './data-access/permission-data-access.service';
import { PermissionController } from './api-controllers/permission/permission.controller';
import { PermissionService } from './business/permission/permission.service';

@Module({
  controllers: [PermissionController],
  providers: [
    RoleDataAccessService,
    PrismaService,
    PermisisonDataAccessService,
    PermissionService,
  ],
})
export class AuthorizationModule {}
