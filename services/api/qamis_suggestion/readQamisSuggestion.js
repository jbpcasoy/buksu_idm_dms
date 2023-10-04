export default async function readQamisSuggestion({ id, ability, filter = {} }) {
    const prisma = PRISMA_CLIENT;
    const accessibility = accessibleBy(ability).QamisSuggestion;
  
    const qamisSuggestion = await prisma.qamisSuggestion.findFirstOrThrow({
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
        SubmittedQamisReview: {
          include: {
            QamisReview: {
              include: {
                IM: {
                  include: {
                    SubmittedQamisSuggestion: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    return qamisSuggestion;
}