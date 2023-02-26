import { PrismaClient } from "@prisma/client";

export default async function readActiveFaculties({ page, limit, name }) {
  const prisma = new PrismaClient();

  try {
    const activeFaculties = await prisma.activeFaculty.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        Faculty: {
          user: {
            name: {
              contains: name,
              // mode: "insensitive",
            },
          },
        },
      },
      include: {
        Faculty: {
          select: {
            id: true,
            user: {
              select: {
                name: true,
                image: true,
              },
            },
            department: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    const total = await prisma.activeFaculty.count({
      where: {
        Faculty: {
          user: {
            name: {
              contains: name,
              // mode: "insensitive",
            },
          },
        },
      },
    });

    return { data: activeFaculties, total };
  } catch (error) {
    throw error;
  }
}
