import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readDeans({ limit, page }) {
  const prisma = PRISMA_CLIENT;

  try {
    const deans = await prisma.dean.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

    return deans;
  } catch (error) {
    throw error;
  }
}
