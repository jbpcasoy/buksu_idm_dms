import userAbility from "@/services/abilities/defineAbility";
import readActiveFaculties from "@/services/api/active_faculty/readActiveFaculties";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getActiveFacultiesHandler(req, res) {
  try {
    const {
      limit,
      page,
      name,
      departmentId,
      sortColumn = "Faculty.user.name",
      sortOrder = "asc",
    } = req.query;

    const user = await getServerUser(req, res);

    // TODO continue, allow read for all users and add casl security
    const activeFaculties = await readActiveFaculties({
      page: parseInt(page),
      limit: parseInt(limit),
      name,
      departmentId,
      sortColumn,
      sortOrder,
      ability: await userAbility(user),
    });

    return res.status(200).json(activeFaculties);
  } catch (error) {
    return res
      .status(error?.ability ? 403 : error?.statusCode ?? 500)
      .json({ message: error?.message ?? "Something went wrong" });
  }
}
