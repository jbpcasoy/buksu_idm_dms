import { PrismaClient } from ".prisma/client";

export default async function readUsers({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const users = await prisma.user.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

    return users;
  } catch (error) {
    throw error;
  }
}
