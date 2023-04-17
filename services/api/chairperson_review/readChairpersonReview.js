import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readChairpersonReview({
  id,
  ability,
  filter = {},
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).ChairpersonReview;
  console.log(
    JSON.stringify({
      where: {
        AND: [accessibility, { ...filter, id }],
      },
    })
  );

  try {
    const chairpersonReview = await prisma.chairpersonReview.findFirstOrThrow({
      where: {
        AND: [accessibility, { ...filter, id }],
      },
      include: {
        IM: true,
        Chairperson: {
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
    return chairpersonReview;
  } catch (error) {
    throw error;
  }
}
