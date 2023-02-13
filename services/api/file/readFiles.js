const { PrismaClient } = require("@prisma/client");

export default async function readFiles({ page, limit }) {
  const prisma = new PrismaClient();

  try {
    const files = await prisma.file.findMany({
      take: limit,
      skip: (page - 1) * limit,
      include: {
        iM: true,
      },
    });

    return files;
  } catch (error) {
    throw error;
  }
}
