import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteChairperson(id) {
  const prisma = PRISMA_CLIENT;

  const chairperson = await prisma.chairperson.delete({
    where: {
      id,
    },
  });
  return chairperson;
}
