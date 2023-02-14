import { PrismaClient } from "@prisma/client";

export default function deleteCollege(id) {
  const prisma = new PrismaClient();

  try {
    const college = prisma.college.delete({
      where: {
        id,
      },
    });

    return college;
  } catch (error) {
    throw error;
  }
}
