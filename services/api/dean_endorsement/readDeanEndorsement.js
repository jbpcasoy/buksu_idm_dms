import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readDeanEndorsement(id, filter = {}) {
  const prisma = PRISMA_CLIENT;

  const deanEndorsement = await prisma.deanEndorsement.findFirstOrThrow({
    where: {
      ...filter,
      id,
    },
  });

  return deanEndorsement;
}
