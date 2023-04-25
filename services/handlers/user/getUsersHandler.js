import userAbility from "@/services/abilities/defineAbility";
import readUsers from "@/services/api/user/readUsers";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getUsersHandler(req, res) {
  const {
    page,
    limit,
    name,
    email,
    sortColumn = "name",
    sortOrder = "asc",
  } = req.query;
  const user = await getServerUser(req, res);

  const users = await readUsers({
    limit: parseInt(limit),
    page: parseInt(page),
    name,
    email,
    sortColumn,
    sortOrder,
    ability: await userAbility(user),
  });

  return res.status(200).json(users);
}
