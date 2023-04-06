import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readIMEvents({ limit, page }) {
  const prisma = PRISMA_CLIENT;

  try {
    const iMEvents = await prisma.iMEvent.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });
    const total = await prisma.iMEvent.count();
    return { data: iMEvents, total };
  } catch (error) {
    throw error;
  }
}
