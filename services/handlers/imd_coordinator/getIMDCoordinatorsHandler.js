import userAbility from "@/services/abilities/defineAbility";
import readIMDCoordinators from "@/services/api/imd_coordinator/readIMDCoordinators";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getIMDCoordinatorsHandler(req, res) {
  try {
    const {
      limit,
      page,
      name,
      sortColumn = "User.name",
      sortOrder = "asc",
    } = req.query;

    const user = await getServerUser(req, res);

    const iMDCoordinator = await readIMDCoordinators({
      limit: parseInt(limit),
      page: parseInt(page),
      name,
      sortColumn,
      sortOrder,
      ability: await userAbility(user),
    });

    return res.status(200).json(iMDCoordinator);
  } catch (error) {
    return res
      .status(error?.ability ? 403 : error?.statusCode ?? 500)
      .json({ message: error?.message ?? "Something went wrong" });
  }
}
