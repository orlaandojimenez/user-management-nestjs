import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/shared/prisma/prisma.service';
import { GetPermissionsDto, PermissionDto } from '../dto/permission.dto';

@Injectable()
export class PermisisonDataAccessService {
  constructor(private readonly prisma: PrismaService) {}

  async createPermission(name: string): Promise<PermissionDto> {
    try {
      return this.prisma.permission.create({ data: { name } });
    } catch (error) {
      throw error;
    }
  }

  async getPermissions(query: GetPermissionsDto): Promise<PermissionDto[]> {
    try {
      return this.prisma.permission.findMany({ where: query });
    } catch (error) {
      throw error;
    }
  }
}
