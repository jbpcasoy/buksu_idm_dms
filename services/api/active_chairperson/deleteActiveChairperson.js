import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteActiveChairperson(id) {
  const prisma = PRISMA_CLIENT;

  const activeChairperson = await prisma.activeChairperson.delete({
    where: {
      id,
    },
  });
  return activeChairperson;
}
