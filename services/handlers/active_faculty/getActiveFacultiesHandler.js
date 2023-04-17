import userAbility from "@/services/abilities/defineAbility";
import readActiveFaculties from "@/services/api/active_faculty/readActiveFaculties";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getActiveFacultiesHandler(req, res) {
  const {
    limit,
    page,
    name,
    departmentId,
    sortColumn = "Faculty.user.name",
    sortOrder = "asc",
  } = req.query;

  const user = await getServerUser(req, res);

  const activeFaculties = await readActiveFaculties({
    page: parseInt(page),
    limit: parseInt(limit),
    name,
    departmentId,
    sortColumn,
    sortOrder,
    ability: await userAbility(user),
  });

  return res.status(200).json(activeFaculties);
}
