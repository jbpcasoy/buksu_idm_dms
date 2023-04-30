import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readChairperson from "../chairperson/readChairperson";
import readActiveFaculty from "../active_faculty/readActiveFaculty";
import readUser from "../user/readUser";

export default async function createActiveChairperson({
  chairpersonId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;

  const chairperson = await readChairperson({
    id: chairpersonId,
    ability,
  });

  const user = await readUser({
    id: chairperson.Faculty.userId,
    ability,
  });

  const activeFaculty = await readActiveFaculty({
    id: user.ActiveFaculty.id,
    ability,
  });

  const activeChairperson = await prisma.activeChairperson.create({
    data: {
      chairpersonId: chairperson.id,
      departmentId: chairperson.Faculty.departmentId,
      activeFacultyId: activeFaculty.id,
    },
  });
  return activeChairperson;
}
