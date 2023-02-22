import { PrismaClient } from "@prisma/client";

export default async function readColleges({ limit, page, name }) {
  const prisma = new PrismaClient();

  try {
    const colleges = await prisma.college.findMany({
      skip: (page - 1) * limit,
      take: limit,
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
    });

    const total = await prisma.college.count({
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
      },
    });

    return { data: colleges, total };
  } catch (error) {
    throw error;
  }
}
