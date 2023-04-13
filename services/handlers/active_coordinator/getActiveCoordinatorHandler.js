import userAbility from "@/services/abilities/defineAbility";
import readActiveCoordinator from "@/services/api/active_coordinator/readActiveCoordinator";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getActiveCoordinatorHandler(req, res) {
  try {
    const { id } = req.query;
    const user = await getServerUser(req, res);

    const activeCoordinator = await readActiveCoordinator({
      id,
      ability: await userAbility(user),
    });
    return res.status(200).json(activeCoordinator);
  } catch (error) {
    return res
      .status(error?.ability ? 403 : error?.statusCode ?? 500)
      .json({ message: error?.message ?? "Something went wrong" });
  }
}
