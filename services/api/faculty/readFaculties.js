import { PrismaClient } from "@prisma/client";

export default async function readFaculties({
  limit,
  page,
  name,
  departmentName,
  collegeName,
}) {
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
      where: {
        user: {
          name: {
            contains: name,
            mode: "insensitive",
          },
        },
        department: {
          name: {
            contains: departmentName,
            mode: "insensitive",
          },
          college: {
            name: {
              contains: collegeName,
              mode: "insensitive",
            },
          },
        },
      },
    });

    const total = await prisma.faculty.count({
      where: {
        user: {
          name: {
            contains: name,
            mode: "insensitive",
          },
        },
        department: {
          name: {
            contains: departmentName,
            mode: "insensitive",
          },
          college: {
            name: {
              contains: collegeName,
              mode: "insensitive",
            },
          },
        },
      },
    });

    return { data: faculties, total };
  } catch (error) {
    throw error;
  }
}
