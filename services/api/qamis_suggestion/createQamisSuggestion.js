import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createQamisSuggestion({ iMId }) {
  const prisma = PRISMA_CLIENT;

  const qamisSuggestion = await prisma.qamisSuggestion.create({
    data: {
      IM: {
        connect: {
          id: iMId,
        },
      },
    },
  });

  return qamisSuggestion;
}
