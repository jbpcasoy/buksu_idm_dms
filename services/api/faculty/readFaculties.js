import { PrismaClient } from "@prisma/client";

export default async function readFaculties({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const faculties = await prisma.faculty.findMany({
      take: limit,
      skip: (page - 1) * limit,
      include: {
        user: {
          select: {
            name: true,
            image: true,
          },
        },
        department: {
          select: {
            college: {
              select: {
                name: true,
              },
            },
            name: true,
          },
        },
      },
    });

    const total = await prisma.faculty.count();

    return { data: faculties, total };
  } catch (error) {
    throw error;
  }
}
