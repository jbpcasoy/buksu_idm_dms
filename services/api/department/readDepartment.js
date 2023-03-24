import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readDepartment(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const department = await prisma.department.findUniqueOrThrow({
      include: {
        ActiveChairperson: {
          select: {
            Chairperson: {
              select: {
                Faculty: {
                  select: {
                    user: true,
                  },
                },
              },
            },
          },
        },
        ActiveCoordinator: {
          select: {
            Coordinator: {
              select: {
                Faculty: {
                  select: {
                    user: true,
                  },
                },
              },
            },
          },
        },
      },
      where: {
        id,
      },
    });

    return department;
  } catch (error) {
    throw error;
  }
}
