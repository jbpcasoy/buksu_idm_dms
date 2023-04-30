import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function updateDocument(id, { name }) {
  const prisma = PRISMA_CLIENT;

  const department = prisma.department.update({
    where: {
      id,
    },
    data: {
      name,
    },
    include: {
      college: {
        select: {
          name: true,
        },
      },
    },
  });

  return department;
}
