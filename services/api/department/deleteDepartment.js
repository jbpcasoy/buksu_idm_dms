import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteDepartment(id) {
  const prisma = PRISMA_CLIENT;

  const department = await prisma.department.delete({
    where: {
      id,
    },
  });

  return department;
}
