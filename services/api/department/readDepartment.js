import { PrismaClient } from "@prisma/client";

export default async function readDepartment(id) {
  const prisma = new PrismaClient();

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
