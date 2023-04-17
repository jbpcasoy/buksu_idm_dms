import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readIMDCoordinatorEndorsements({ limit, page }) {
  const prisma = PRISMA_CLIENT;

  const iMDCoordinatorEndorsements =
    await prisma.iMDCoordinatorEndorsement.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

  const total = await prisma.iMDCoordinatorEndorsement.count();
  return { data: iMDCoordinatorEndorsements, total };
}
