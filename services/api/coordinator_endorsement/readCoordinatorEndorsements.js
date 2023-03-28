import { PRISMA_CLIENT } from "@/prisma/prisma_client";
export default async function readCoordinatorEndorsements({ limit, page }) {
  const prisma = PRISMA_CLIENT;

  const coordinatorEndorsements = await prisma.coordinatorEndorsement.findMany({
    take: limit,
    skip: (page - 1) * limit,
  });
  const total = await prisma.coordinatorEndorsement.count();

  return { data: coordinatorEndorsements, total };
}
