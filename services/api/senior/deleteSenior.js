import { PrismaClient } from "@prisma/client";

export default async function deleteSenior(id) {
  const prisma = new PrismaClient();

  try {
    const senior = await prisma.senior.delete({
      where: {
        id,
      },
    });
    return senior;
  } catch (error) {
    throw error;
  }
}
