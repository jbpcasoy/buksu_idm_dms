import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readDeans({ limit, page }) {
  const prisma = PRISMA_CLIENT;

  try {
    const deans = await prisma.dean.findMany({
      take: limit,
      skip: (page - 1) * limit,
      include: {
        Faculty: {
          select: {
            user: {
              select: {
                image: true,
                name: true,
              },
            },
            department: {
              select: {
                college: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
        ActiveDean: true,
      },
    });

    const total = await prisma.dean.count();
    return { data: deans, total };
  } catch (error) {
    throw error;
  }
}
