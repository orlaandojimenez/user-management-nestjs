import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/modules/shared/prisma/prisma.service';
import { RoleDto } from '../dto/role.dto';

@Injectable()
export class RoleDataAccessService {
  constructor(private readonly prisma: PrismaService) {}

  async createRole(name: string): Promise<RoleDto> {
    return this.prisma.role.create({ data: { name } });
  }
}
