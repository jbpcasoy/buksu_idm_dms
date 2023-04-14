import userAbility from "@/services/abilities/defineAbility";
import readCoordinators from "@/services/api/coordinator/readCoordinators";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getCoordinatorsHandler(req, res) {
  try {
    const {
      limit,
      page,
      name,
      collegeName,
      departmentName,
      active,
      sortColumn = "Faculty.user.name",
      sortOrder = "asc",
    } = req.query;

    const user = await getServerUser(req, res);

    const coordinators = await readCoordinators({
      limit: parseInt(limit),
      page: parseInt(page),
      name,
      collegeName,
      departmentName,
      active: active ? JSON.parse(active) : undefined,
      sortColumn,
      sortOrder,
      ability: await userAbility(user),
    });

    res.status(200).json(coordinators);
  } catch (error) {
    return res
      .status(error?.ability ? 403 : error?.statusCode ?? 500)
      .json({ message: error?.message ?? "Something went wrong" });
  }
}
