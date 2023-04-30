import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readCoordinatorSuggestions({
  limit,
  page,
  submittedCoordinatorReviewId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).CoordinatorSuggestion;

  const coordinatorSuggestions = await prisma.coordinatorSuggestion.findMany({
    take: limit,
    skip: (page - 1) * limit,
    where: {
      AND: [
        accessibility,
        {
          submittedCoordinatorReviewId: {
            contains: submittedCoordinatorReviewId,
          },
        },
      ],
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
      AND: [
        accessibility,
        {
          submittedCoordinatorReviewId: {
            contains: submittedCoordinatorReviewId,
          },
        },
      ],
    },
  });
  return { data: coordinatorSuggestions, total };
}
