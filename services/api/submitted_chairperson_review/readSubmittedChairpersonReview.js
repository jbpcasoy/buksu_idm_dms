import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readSubmittedChairpersonReview({
  id,
  ability,
  filter = {},
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).SubmittedChairpersonReview;

  const submittedChairpersonReview =
    await prisma.submittedChairpersonReview.findFirstOrThrow({
      where: {
        AND: [
          accessibility,
          {
            ...filter,
            id,
          },
        ],
      },
    });
  return submittedChairpersonReview;
}
