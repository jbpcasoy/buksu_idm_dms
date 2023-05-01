import userAbility from "@/services/abilities/defineAbility";
import readColleges from "@/services/api/college/readColleges";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getCollegesHandler(req, res) {
  const {
    page,
    limit,
    name,
    sortColumn = "name",
    sortOrder = "asc",
  } = req.query;

  const user = await getServerUser(req, res);

  const colleges = await readColleges({
    page: page ? parseInt(page) : undefined,
    limit: page ? parseInt(limit) : undefined,
    name,
    sortColumn,
    sortOrder,
    ability: await userAbility(user),
  });

  return res.status(200).json(colleges);
}
