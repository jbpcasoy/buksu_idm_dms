import { PrismaClient } from "@prisma/client";

export default async function readDepartments({
  limit,
  page,
  name,
  collegeName,
}) {
  const prisma = new PrismaClient();

  try {
    const departments = await prisma.department.findMany({
      take: limit,
      skip: (page - 1) * limit,
      include: {
        college: {
          select: {
            name: true,
          },
        },
      },
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
        college: {
          name: {
            contains: collegeName,
            mode: "insensitive",
          },
        },
      },
    });

    const total = await prisma.department.count({
      where: {
        name: {
          contains: name,
          mode: "insensitive",
        },
        college: {
          name: {
            contains: collegeName,
            mode: "insensitive",
          },
        },
      },
    });

    return { data: departments, total };
  } catch (error) {
    throw error;
  }
}
