import userAbility from "@/services/abilities/defineAbility";
import readChairpersons from "@/services/api/chairperson/readChairpersons";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getChairpersonsHandler(req, res) {
  try {
    const {
      limit,
      page,
      name,
      departmentName,
      collegeName,
      active,
      sortColumn = "Faculty.user.name",
      sortOrder = "asc",
    } = req.query;

    const user = await getServerUser(req, res);

    const chairpersons = await readChairpersons({
      limit: parseInt(limit),
      page: parseInt(page),
      name,
      departmentName,
      collegeName,
      active: active ? JSON.parse(active) : undefined,
      sortColumn,
      sortOrder,
      ability: await userAbility(user),
    });

    res.status(200).json(chairpersons);
  } catch (error) {
    return res
      .status(error?.ability ? 403 : error?.statusCode ?? 500)
      .json({ message: error?.message ?? "Something went wrong" });
  }
}
