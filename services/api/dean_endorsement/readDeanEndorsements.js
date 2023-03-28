import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readDeanEndorsements({ limit, page }) {
  const prisma = PRISMA_CLIENT;

  try {
    const deanEndorsements = await prisma.deanEndorsement.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });
    const total = await prisma.deanEndorsement.count();

    return { data: deanEndorsements, total };
  } catch (error) {
    throw error;
  }
}
