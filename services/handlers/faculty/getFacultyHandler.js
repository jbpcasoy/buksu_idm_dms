import userAbility from "@/services/abilities/defineAbility";
import readFaculty from "@/services/api/faculty/readFaculty";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getFacultyHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const faculty = await readFaculty({ id, ability: await userAbility(user) });
  return res.status(200).json(faculty);
}
