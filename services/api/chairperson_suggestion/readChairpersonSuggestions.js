import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readChairpersonSuggestions({
  limit,
  page,
  submittedChairpersonReviewId,
}) {
  const prisma = PRISMA_CLIENT;
  try {
    const chairpersonSuggestions = await prisma.chairpersonSuggestion.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        submittedChairpersonReviewId: {
          contains: submittedChairpersonReviewId,
        },
      },
      include: {
        SubmittedChairpersonSuggestion: true,
        SubmittedChairpersonReview: {
          include: {
            ChairpersonReview: {
              select: {
                Chairperson: {
                  select: {
                    Faculty: {
                      select: {
                        user: {
                          select: {
                            name: true,
                            image: true,
                            id: true,
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
    const total = await prisma.chairpersonSuggestion.count({
      where: {
        submittedChairpersonReviewId: {
          contains: submittedChairpersonReviewId,
        },
      },
    });

    return { data: chairpersonSuggestions, total };
  } catch (error) {
    throw error;
  }
}
