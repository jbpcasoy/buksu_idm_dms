import { PrismaClient } from "@prisma/client";

export default async function readSeniors({
  limit,
  page,
  name,
  departmentName,
  collegeName,
}) {
  const prisma = new PrismaClient();

  try {
    const seniors = await prisma.senior.findMany({
      take: limit,
      skip: (page - 1) * limit,
      include: {
        ActiveSenior: true,
        Faculty: {
          select: {
            department: {
              select: {
                id: true,
                name: true,
                college: {
                  select: {
                    name: true,
                  },
                },
              },
            },
            user: {
              select: {
                image: true,
                name: true,
              },
            },
          },
        },
      },
      where: {
        Faculty: {
          user: {
            name: {
              contains: name,
              // mode: "insensitive",
            },
          },
          department: {
            name: {
              contains: departmentName,
              // mode: "insensitive",
            },
            college: {
              name: {
                contains: collegeName,
                // mode: "insensitive",
              },
            },
          },
        },
      },
    });

    const total = await prisma.senior.count({
      where: {
        Faculty: {
          user: {
            name: {
              contains: name,
              // mode: "insensitive",
            },
          },
          department: {
            name: {
              contains: departmentName,
              // mode: "insensitive",
            },
            college: {
              name: {
                contains: collegeName,
                // mode: "insensitive",
              },
            },
          },
        },
      },
    });

    return { data: seniors, total };
  } catch (error) {
    throw error;
  }
}
