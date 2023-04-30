import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readCoordinatorReview({
  id,
  ability,
  filter = {},
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).CoordinatorReview;

  const coordinatorReview = await prisma.coordinatorReview.findFirstOrThrow({
    where: {
      AND: [
        accessibility,
        {
          ...filter,
          id,
        },
      ],
    },
    include: {
      IM: {
        include: {
          SubmittedCoordinatorSuggestion: true,
        },
      },
      Coordinator: {
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

  return coordinatorReview;
}
