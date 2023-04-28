import userAbility from "@/services/abilities/defineAbility";
import readChairpersons from "@/services/api/chairperson/readChairpersons";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getChairpersonsHandler(req, res) {
  const {
    limit,
    page,
    name,
    departmentName,
    collegeName,
    active,
    email,
    sortColumn = "Faculty.user.name",
    sortOrder = "asc",
  } = req.query;

  const user = await getServerUser(req, res);

  const chairpersons = await readChairpersons({
    limit: parseInt(limit),
    page: parseInt(page),
    name,
    departmentName,
    collegeName,
    active: active ? JSON.parse(active) : undefined,
    sortColumn,
    sortOrder,
    email,
    ability: await userAbility(user),
  });

  res.status(200).json(chairpersons);
}
