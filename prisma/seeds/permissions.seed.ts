import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function seedPermissions() {
  const permissions = [
    { name: 'CREATE_USER' },
    { name: 'READ_USER' },
    { name: 'UPDATE_USER' },
    { name: 'DELETE_USER' },
    { name: 'CREATE_ROLE' },
    { name: 'READ_ROLE' },
    { name: 'DELETE_ROLE' },
    { name: 'CREATE_PERMISSION' },
    { name: 'READ_PERMISSION' },
  ];

  for (const permission of permissions) {
    await prisma.permission.upsert({
      where: { name: permission.name },
      update: {},
      create: permission,
    });
  }
}
