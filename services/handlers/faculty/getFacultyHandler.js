import userAbility from "@/services/abilities/defineAbility";
import readFaculty from "@/services/api/faculty/readFaculty";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getFacultyHandler(req, res) {
  try {
    const { id } = req.query;
    const user = await getServerUser(req, res);

    const faculty = await readFaculty({ id, ability: await userAbility(user) });
    return res.status(200).json(faculty);
  } catch (error) {
    return res
      .status(error?.ability ? 403 : error?.statusCode ?? 500)
      .json({ message: error?.message ?? "Something went wrong" });
  }
}
