import userAbility from "@/services/abilities/defineAbility";
import readFaculties from "@/services/api/faculty/readFaculties";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getFacultiesHandler(req, res) {
  const {
    limit,
    page,
    name,
    departmentName,
    collegeName,
    sortColumn = "User.name",
    sortOrder = "asc",
    active,
    email,
  } = req.query;

  const user = await getServerUser(req, res);

  const faculties = await readFaculties({
    limit: parseInt(limit),
    page: parseInt(page),
    name,
    departmentName,
    collegeName,
    sortColumn,
    active: active ? JSON.parse(active) : undefined,
    email,
    sortOrder,
    ability: await userAbility(user),
  });

  res.status(200).json(faculties);
}
