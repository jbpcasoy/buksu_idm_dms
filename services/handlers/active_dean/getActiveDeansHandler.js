import userAbility from "@/services/abilities/defineAbility";
import readActiveDeans from "@/services/api/active_dean/readActiveDeans";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getActiveDeansHandler(req, res) {
  try {
    const { limit, page } = req.query;
    const user = await getServerUser(req, res);

    const activeDeans = await readActiveDeans({
      limit: parseInt(limit),
      page: parseInt(page),
      ability: await userAbility(user),
    });
    return res.status(200).json(activeDeans);
  } catch (error) {
    return res
      .status(error?.ability ? 403 : error?.statusCode ?? 500)
      .json({ message: error?.message ?? "Something went wrong" });
  }
}
