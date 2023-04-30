import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readDepartmentApproval(id) {
  const prisma = PRISMA_CLIENT;

  const departmentApproval = await prisma.departmentApproval.findUniqueOrThrow({
    where: {
      id,
    },
  });

  return departmentApproval;
}
