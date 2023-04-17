import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readCoordinatorSuggestions({
  limit,
  page,
  submittedCoordinatorReviewId,
}) {
  const prisma = PRISMA_CLIENT;

  const coordinatorSuggestions = await prisma.coordinatorSuggestion.findMany({
    take: limit,
    skip: (page - 1) * limit,
    where: {
      submittedCoordinatorReviewId: {
        contains: submittedCoordinatorReviewId,
      },
    },
    include: {
      SubmittedCoordinatorSuggestion: true,
      SubmittedCoordinatorReview: {
        include: {
          CoordinatorReview: {
            select: {
              Coordinator: {
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
  const total = await prisma.coordinatorSuggestion.count({
    where: {
      submittedCoordinatorReviewId: {
        contains: submittedCoordinatorReviewId,
      },
    },
  });
  return { data: coordinatorSuggestions, total };
}
