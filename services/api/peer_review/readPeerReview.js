import { PrismaClient } from "@prisma/client";

export default async function readPeerReview(id) {
  const prisma = new PrismaClient();

  try {
    const peerReview = await prisma.peerReview.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        IM: true,
        Faculty: {
          include: {
            user: true,
          },
        },
      },
    });
    return peerReview;
  } catch (error) {
    throw error;
  }
}
