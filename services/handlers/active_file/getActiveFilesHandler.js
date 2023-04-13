import userAbility from "@/services/abilities/defineAbility";
import readActiveFiles from "@/services/api/active_file/readActiveFiles";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getActivesFileHandler(req, res) {
  try {
    const { limit, page } = req.query;

    const user = await getServerUser(req, res);

    const activeFiles = await readActiveFiles({
      limit: parseInt(limit),
      page: parseInt(page),
      ability: await userAbility(user),
    });

    return res.status(200).json(activeFiles);
  } catch (error) {
    return res
      .status(error?.ability ? 403 : error?.statusCode ?? 500)
      .json({ message: error?.message ?? "Something went wrong" });
  }
}
