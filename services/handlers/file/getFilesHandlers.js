import userAbility from "@/services/abilities/defineAbility";
import readFiles from "@/services/api/file/readFiles";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getFilesHandler(req, res) {
  const {
    page = 1,
    limit = 10,
    fileName,
    originalFileName,
    iMSerialNumber,
    active,
    iMId,
    sortColumn = "fileName",
    sortOrder = "asc",
  } = req.query;

  const user = await getServerUser(req, res);

  const files = await readFiles({
    limit: parseInt(limit),
    page: parseInt(page),
    fileName,
    originalFileName,
    iMSerialNumber,
    active: active ? JSON.parse(active) : undefined,
    iMId,
    sortColumn,
    sortOrder,
    ability: await userAbility(user),
  });
  return res.status(200).json(files);
}
