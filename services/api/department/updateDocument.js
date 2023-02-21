import { PrismaClient } from "@prisma/client";

export default async function updateDocument(id, { name }) {
  const prisma = new PrismaClient();

  try {
    const department = prisma.department.update({
      where: {
        id,
      },
      data: {
        name,
      },
      include: {
        college: {
          select: {
            name: true,
          },
        },
      },
    });

    return department;
  } catch (error) {
    throw error;
  }
}
