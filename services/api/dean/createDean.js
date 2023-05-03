import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readDepartment from "../department/readDepartment";
import readFaculty from "../faculty/readFaculty";

export default async function createDean({ facultyId, ability }) {
  const prisma = PRISMA_CLIENT;

  const faculty = await readFaculty({ id: facultyId, ability });
  const department = await readDepartment({
    id: faculty.departmentId,
    ability,
  });

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
