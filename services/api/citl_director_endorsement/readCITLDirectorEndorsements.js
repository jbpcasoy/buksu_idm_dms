import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readCITLDirectorEndorsements({ limit, page }) {
  const prisma = PRISMA_CLIENT;

  try {
    const cITLDirectorEndorsements =
      await prisma.cITLDirectorEndorsement.findMany({
        take: limit,
        skip: (page - 1) * limit,
      });
    const total = await prisma.cITLDirectorEndorsement.count();

    return { data: cITLDirectorEndorsements, total };
  } catch (error) {
    throw error;
  }
}
