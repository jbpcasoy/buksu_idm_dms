import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readSubmittedCoordinatorReview({ id, ability }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).SubmittedCoordinatorReview;

  const submittedCoordinatorReview =
    await prisma.submittedCoordinatorReview.findFirstOrThrow({
      where: {
        AND: [
          accessibility,
          {
            id,
          },
        ],
      },
      include: {
        CoordinatorReview: true,
      },
    });
  return submittedCoordinatorReview;
}
