import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readCoordinatorReviewItem({ id, ability }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).CoordinatorReviewItem;

  const coordinatorReviewItem =
    await prisma.coordinatorReviewItem.findFirstOrThrow({
      where: {
        AND: [
          accessibility,
          {
            id,
          },
        ],
      },
      include: {
        CoordinatorReview: {
          include: {
            IM: {
              include: {
                SubmittedCoordinatorSuggestion: true,
              },
            },
          },
        },
      },
    });

  return coordinatorReviewItem;
}
