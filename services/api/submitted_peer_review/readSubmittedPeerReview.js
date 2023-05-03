import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readSubmittedPeerReview({
  id,
  ability,
  filter = {},
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).SubmittedPeerReview;

  const submittedPeerReview = await prisma.submittedPeerReview.findFirstOrThrow(
    {
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
        PeerReview: true,
      },
    }
  );
  return submittedPeerReview;
}
