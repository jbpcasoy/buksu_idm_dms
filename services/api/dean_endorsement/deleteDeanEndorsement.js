import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteDeanEndorsement(id) {
  const prisma = PRISMA_CLIENT;

  const deanEndorsement = await prisma.deanEndorsement.delete({
    where: {
      id,
    },
  });
  return deanEndorsement;
}
