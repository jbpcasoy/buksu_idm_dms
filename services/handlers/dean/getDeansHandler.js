import userAbility from "@/services/abilities/defineAbility";
import readDeans from "@/services/api/dean/readDeans";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getDeansHandler(req, res) {
  try {
    const { limit, page } = req.query;

    const user = await getServerUser(req, res);

    const deans = await readDeans({
      limit: parseInt(limit),
      page: parseInt(page),
      ability: await userAbility(user),
    });

    return res.status(200).json(deans);
  } catch (error) {
    return res
      .status(error?.ability ? 403 : error?.statusCode ?? 500)
      .json({ message: error?.message ?? "Something went wrong" });
  }
}
