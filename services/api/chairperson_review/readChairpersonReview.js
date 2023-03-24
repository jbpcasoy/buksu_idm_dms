import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readChairpersonReview(id) {
  const prisma = PRISMA_CLIENT;

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
