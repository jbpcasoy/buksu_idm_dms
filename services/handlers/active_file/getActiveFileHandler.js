import userAbility from "@/services/abilities/defineAbility";
import readActiveFile from "@/services/api/active_file/readActiveFile";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getActiveFileHandler(req, res) {
  try {
    const { id } = req.query;
    const user = await getServerUser(req, res);

    const activeFile = await readActiveFile({
      id,
      ability: await userAbility(user),
    });
    return res.status(200).json(activeFile);
  } catch (error) {
    return res
      .status(error?.ability ? 403 : error?.statusCode ?? 500)
      .json({ message: error?.message ?? "Something went wrong" });
  }
}
