import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreatePermissionRequest } from './parameters/create-permission.request';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PermissionService } from '../../business/permission/permission.service';
import { GetPermissionRequest } from './parameters/get-permissions.request';

@ApiTags('permission')
@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionsService: PermissionService) {}

  @ApiOperation({ summary: 'Create new permission' })
  @Post()
  async createPermission(@Body() body: CreatePermissionRequest) {
    return this.permissionsService.createPermission(body.name);
  }

  @Get()
  async getPermissions(@Query() query: GetPermissionRequest) {
    return this.permissionsService.getPermissions(query);
  }
}
