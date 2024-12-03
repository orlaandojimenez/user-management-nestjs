import { PrismaClient } from '@prisma/client';
import { seedPermissions } from './seeds/permissions.seed';

const prisma = new PrismaClient();

async function main() {
  await seedPermissions();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
