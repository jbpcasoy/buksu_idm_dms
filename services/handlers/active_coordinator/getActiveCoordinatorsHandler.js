import userAbility from "@/services/abilities/defineAbility";
import readActiveCoordinators from "@/services/api/active_coordinator/readActiveCoordinators";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getActiveCoordinatorsHandler(req, res) {
  try {
    const { limit, page } = req.query;
    const user = await getServerUser(req, res);

    const activeCoordinators = await readActiveCoordinators({
      limit: parseInt(limit),
      page: parseInt(page),
      ability: await userAbility(user),
    });
    return res.status(200).json(activeCoordinators);
  } catch (error) {
    return res
      .status(error?.ability ? 403 : error?.statusCode ?? 500)
      .json({ message: error?.message ?? "Something went wrong" });
  }
}
