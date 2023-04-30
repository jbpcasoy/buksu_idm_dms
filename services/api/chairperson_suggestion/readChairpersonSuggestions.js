import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readChairpersonSuggestions({
  limit,
  page,
  submittedChairpersonReviewId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).ChairpersonSuggestion;

  const chairpersonSuggestions = await prisma.chairpersonSuggestion.findMany({
    take: limit,
    skip: (page - 1) * limit,
    where: {
      AND: [
        accessibility,
        {
          submittedChairpersonReviewId: {
            contains: submittedChairpersonReviewId,
          },
        },
      ],
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
      AND: [
        accessibility,
        {
          submittedChairpersonReviewId: {
            contains: submittedChairpersonReviewId,
          },
        },
      ],
    },
  });

  return { data: chairpersonSuggestions, total };
}
