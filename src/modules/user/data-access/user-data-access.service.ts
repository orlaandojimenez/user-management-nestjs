import { PrismaService } from '@/modules/shared/prisma/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserDataAccessService {
  constructor(private readonly prisma: PrismaService) {}
}
