import userAbility from "@/services/abilities/defineAbility";
import readDepartment from "@/services/api/department/readDepartment";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getDepartmentHandler(req, res) {
  const { id } = req.query;

  const user = await getServerUser(req, res);
  const department = await readDepartment({
    id,
    ability: await userAbility(user),
  });

  return res.status(200).json(department);
}
