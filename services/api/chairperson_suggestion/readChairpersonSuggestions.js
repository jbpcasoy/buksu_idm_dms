import { PrismaClient } from "@prisma/client";

export default async function readChairpersonSuggestions({ limit, page }) {
  const prisma = new PrismaClient();
  try {
    const chairpersonSuggestions = await prisma.chairpersonSuggestion.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });
    const total = await prisma.chairpersonSuggestion.count();

    return { data: chairpersonSuggestions, total };
  } catch (error) {
    throw error;
  }
}
