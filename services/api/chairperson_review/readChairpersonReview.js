import { PrismaClient } from "@prisma/client";

export default async function readChairpersonReview(id) {
  const prisma = new PrismaClient();

  try {
    const chairpersonReview = await prisma.chairpersonReview.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        IM: true,
        Chairperson: {
          select: {
            Faculty: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });
    return chairpersonReview;
  } catch (error) {
    throw error;
  }
}
