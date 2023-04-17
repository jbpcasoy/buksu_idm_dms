import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteIMDCoordinatorEndorsement(id) {
  const prisma = PRISMA_CLIENT;

  const iMDCoordinatorEndorsement =
    await prisma.iMDCoordinatorEndorsement.delete({
      where: {
        id,
      },
    });
  return iMDCoordinatorEndorsement;
}
