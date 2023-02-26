import { PrismaClient } from ".prisma/client";

export default async function readUsers({ limit, page, name }) {
  const prisma = new PrismaClient();

  try {
    const users = await prisma.user.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        name: {
          contains: name,
          // mode: "insensitive",
        },
      },
    });

    const total = await prisma.user.count({
      where: {
        name: {
          contains: name,
          // mode: "insensitive",
        },
      },
    });

    return { data: users, total };
  } catch (error) {
    throw error;
  }
}
