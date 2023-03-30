import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readUser(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        LoginRole: true,
        ActiveFaculty: {
          include: {
            ActiveDean: true,
            ActiveChairperson: true,
            ActiveCoordinator: true,
            Faculty: {
              include: {
                department: {
                  include: {
                    college: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return user;
  } catch (error) {
    throw error;
  }
}
