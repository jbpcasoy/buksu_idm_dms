import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readQamisSuggestionItem({ id, ability }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).QamisSuggestionItem;

  const qamisSuggestionItem = await prisma.qamisSuggestionItem.findFirstOrThrow({
    where: {
      AND: [
        accessibility,
        {
          id,
        },
      ],
    },
  });
  return qamisSuggestionItem;
}
