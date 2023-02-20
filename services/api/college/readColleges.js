import { PrismaClient } from "@prisma/client";

export default async function readColleges({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const colleges = await prisma.college.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    const total = await prisma.college.count();

    return { data: colleges, total };
  } catch (error) {
    throw error;
  }
}
