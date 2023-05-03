import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default function deleteCollege(id) {
  const prisma = PRISMA_CLIENT;

  const college = prisma.college.delete({
    where: {
      id,
    },
  });

  return college;
}
