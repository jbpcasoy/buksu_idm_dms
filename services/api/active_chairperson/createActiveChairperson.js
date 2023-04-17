import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createActiveChairperson({ chairpersonId }) {
  const prisma = PRISMA_CLIENT;

  const chairperson = await findChairperson({
    chairpersonId,
  });

  const activeFaculty = await findActiveFaculty({
    facultyId: chairperson.facultyId,
  });

  const activeChairperson = await prisma.activeChairperson.create({
    data: {
      chairpersonId: chairperson.id,
      departmentId: chairperson.Faculty.department.id,
      activeFacultyId: activeFaculty.id,
    },
  });
  return activeChairperson;
}

async function findChairperson({ chairpersonId }) {
  const prisma = PRISMA_CLIENT;

  const chairperson = await prisma.chairperson.findFirstOrThrow({
    include: {
      Faculty: {
        include: {
          department: true,
          ActiveFaculty: true,
        },
      },
    },
    where: {
      id: chairpersonId,
    },
  });
  return chairperson;
}

async function findActiveFaculty({ facultyId }) {
  const prisma = PRISMA_CLIENT;

  const activeFaculty = await prisma.activeFaculty.findUnique({
    where: {
      facultyId,
    },
  });
  return activeFaculty;
}
