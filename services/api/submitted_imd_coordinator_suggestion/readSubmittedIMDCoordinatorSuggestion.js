import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readSubmittedIMDCoordinatorSuggestion(
  id,
  filter = {}
) {
  const prisma = PRISMA_CLIENT;

  const submittedIMDCoordinatorSuggestion =
    await prisma.submittedIMDCoordinatorSuggestion.findFirstOrThrow({
      where: {
        ...filter,
        id,
      },
      include: {
        IMDCoordinatorSuggestion: true,
      },
    });

  return submittedIMDCoordinatorSuggestion;
}
