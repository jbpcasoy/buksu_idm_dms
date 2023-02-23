import { PrismaClient } from "@prisma/client";

export default async function readChairpersons({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const chairpersons = await prisma.chairperson.findMany({
      take: limit,
      skip: (page - 1) * limit,
      include: {
        Faculty: {
          select: {
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
    });

    const total = await prisma.chairperson.count();

    return { data: chairpersons, total };
  } catch (error) {
    throw error;
  }
}
