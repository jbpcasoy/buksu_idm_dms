import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readDepartment from "../department/readDepartment";
import readFaculty from "../faculty/readFaculty";

export default async function createDean({ facultyId }) {
  const prisma = PRISMA_CLIENT;

  const faculty = await readFaculty(facultyId);
  const department = await readDepartment(faculty.departmentId);

  const dean = await prisma.dean.create({
    data: {
      Faculty: {
        connect: {
          id: faculty.id,
        },
      },
      College: {
        connect: {
          id: department.collegeId,
        },
      },
    },
  });

  return dean;
}
