import userAbility from "@/services/abilities/defineAbility";
import readCoordinator from "@/services/api/coordinator/readCoordinator";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getCoordinatorHandler(req, res) {
  try {
    const { id } = req.query;
    const user = await getServerUser(req, res);

    const coordinator = await readCoordinator({
      id,
      ability: await userAbility(user),
    });
    return res.status(200).json(coordinator);
  } catch (error) {
    return res
      .status(error?.ability ? 403 : error?.statusCode ?? 500)
      .json({ message: error?.message ?? "Something went wrong" });
  }
}
