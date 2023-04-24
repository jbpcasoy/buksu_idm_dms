import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readPeerSuggestions({
  limit,
  page,
  submittedPeerReviewId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).PeerSuggestion;

  const peerSuggestions = await prisma.peerSuggestion.findMany({
    take: limit,
    skip: limit && page ? (page - 1) * limit : undefined,
    where: {
      AND: [
        accessibility,
        {
          submittedPeerReviewId: {
            contains: submittedPeerReviewId,
          },
        },
      ],
    },
    include: {
      SubmittedPeerSuggestion: true,
      SubmittedPeerReview: {
        select: {
          PeerReview: {
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
  });
  const total = await prisma.peerSuggestion.count({
    where: {
      AND: [
        accessibility,
        {
          submittedPeerReviewId: {
            contains: submittedPeerReviewId,
          },
        },
      ],
    },
  });

  return { data: peerSuggestions, total };
}
