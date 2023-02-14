import { PrismaClient } from "@prisma/client";

export default async function readColleges({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const colleges = await prisma.college.findMany({
      skip: (page - 1) * limit,
      take: limit,
    });

    return colleges;
  } catch (error) {
    throw error;
  }
}
