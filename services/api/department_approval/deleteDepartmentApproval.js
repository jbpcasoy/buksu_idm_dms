import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteDepartmentApproval(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const departmentApproval = await prisma.departmentApproval.delete({
      where: {
        id,
      },
    });

    return departmentApproval;
  } catch (error) {
    throw error;
  }
}
