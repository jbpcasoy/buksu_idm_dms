import { PrismaClient } from "@prisma/client";

export default async function getUser(email) {
  const prisma = new PrismaClient();

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    return user;
  } catch (error) {
    throw error;
  }
}
