import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function getUserByEmail(email) {
  const prisma = PRISMA_CLIENT;

  try {
    const user = await prisma.user.findUniqueOrThrow({
      where: {
        email,
      },
      include: {
        ActiveFaculty: {
          include: {
            ActiveChairperson: true,
            ActiveCoordinator: true,
          },
        },
      },
    });

    return user;
  } catch (error) {
    throw error;
  }
}
