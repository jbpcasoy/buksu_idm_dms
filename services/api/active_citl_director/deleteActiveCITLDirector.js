import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteActiveCITLDirector(id) {
  const prisma = PRISMA_CLIENT;

  const activeCITLDirector = await prisma.activeCITLDirector.delete({
    where: {
      id,
    },
  });
  return activeCITLDirector;
}
