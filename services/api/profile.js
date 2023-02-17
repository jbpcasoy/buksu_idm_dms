import { PrismaClient } from "@prisma/client";

export async function updateUser(id, data) {
  const prisma = new PrismaClient();

  try {
    const updatedUser = await prisma.user.update({
      where: { id: id },
      data: data,
    });

    return updatedUser;
  } catch (error) {
    throw error;
  }
}
