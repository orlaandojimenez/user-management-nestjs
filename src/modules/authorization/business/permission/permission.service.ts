import { Injectable } from '@nestjs/common';
import { PermisisonDataAccessService } from '../../data-access/permission-data-access.service';
import { GetPermissionsDto } from '../../dto/permission.dto';

@Injectable()
export class PermissionService {
  constructor(private readonly dataAccess: PermisisonDataAccessService) {}

  async createPermission(name: string) {
    return this.dataAccess.createPermission(name);
  }

  async getPermissions(query: GetPermissionsDto) {
    return this.dataAccess.getPermissions(query);
  }
}
