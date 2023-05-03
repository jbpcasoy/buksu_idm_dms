import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createFaculty({ userId, departmentId }) {
  const prisma = PRISMA_CLIENT;

  const faculty = await prisma.faculty.create({
    data: {
      userId,
      departmentId,
    },
  });

  return faculty;
}
