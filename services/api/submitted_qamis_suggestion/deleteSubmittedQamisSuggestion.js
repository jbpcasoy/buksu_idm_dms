import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteSubmittedQamisSuggestion(id) {
  const prisma = PRISMA_CLIENT;

  const submittedQamisSuggestion = await prisma.submittedQamisSuggestion.delete({
    where: {
      id,
    },
  });
  return submittedQamisSuggestion;
}
