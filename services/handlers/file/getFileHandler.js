import userAbility from "@/services/abilities/defineAbility";
import readFile from "@/services/api/file/readFile";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getFileHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);
  const foundFile = await readFile({ id, ability: await userAbility(user) });

  return res.status(200).json(foundFile);
}
