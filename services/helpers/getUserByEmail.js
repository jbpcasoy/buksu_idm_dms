import { PrismaClient } from "@prisma/client";

export default async function getUserByEmail(email) {
  const prisma = new PrismaClient();

  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        email,
      },
      include: {
        ActiveFaculty: true,
      },
    });

    return user;
  } catch (error) {
    throw error;
  }
}
