import { PrismaClient } from ".prisma/client";

export default async function readUser(id) {
  const prisma = new PrismaClient();

  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return user;
  } catch (error) {
    throw error;
  }
}
