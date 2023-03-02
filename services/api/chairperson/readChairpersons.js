import { PrismaClient } from "@prisma/client";

export default async function readChairpersons({
  limit,
  page,
  name,
  departmentName,
  collegeName,
  active,
}) {
  const prisma = new PrismaClient();

  try {
    const chairpersons = await prisma.chairperson.findMany({
      take: limit,
      skip: (page - 1) * limit,
      include: {
        Faculty: {
          select: {
            departmentId: true,
            user: {
              select: {
                name: true,
                image: true,
              },
            },
            department: {
              select: {
                name: true,
                college: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
        ActiveChairperson: true,
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
        ActiveChairperson:
          active === true
            ? {
                isNot: null,
              }
            : active === false
            ? {
                is: null,
              }
            : undefined,
      },
    });

    const total = await prisma.chairperson.count({
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
        ActiveChairperson:
          active === true
            ? {
                isNot: null,
              }
            : active === false
            ? {
                is: null,
              }
            : undefined,
      },
    });

    return { data: chairpersons, total };
  } catch (error) {
    throw error;
  }
}
