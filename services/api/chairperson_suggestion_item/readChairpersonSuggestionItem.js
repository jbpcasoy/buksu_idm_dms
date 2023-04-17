import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readChairpersonSuggestionItem(id) {
  const prisma = PRISMA_CLIENT;

  const chairpersonSuggestionItem =
    await prisma.chairpersonSuggestionItem.findUniqueOrThrow({
      where: {
        id,
      },
    });

  return chairpersonSuggestionItem;
}
