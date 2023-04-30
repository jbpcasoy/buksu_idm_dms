import userAbility from "@/services/abilities/defineAbility";
import readActiveFaculty from "@/services/api/active_faculty/readActiveFaculty";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getActiveFacultyHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const activeFaculty = await readActiveFaculty({
    id,
    ability: await userAbility(user),
  });

  return res.status(200).json(activeFaculty);
}
