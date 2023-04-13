import userAbility from "@/services/abilities/defineAbility";
import readActiveFaculty from "@/services/api/active_faculty/readActiveFaculty";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getActiveFacultyHandler(req, res) {
  try {
    const { id } = req.query;
    const user = await getServerUser(req, res);

    const activeFaculty = await readActiveFaculty({
      id,
      ability: await userAbility(user),
    });
    console.log({ activeFaculty });
    return res.status(200).json(activeFaculty);
  } catch (error) {
    return res
      .status(error?.ability ? 403 : error?.statusCode ?? 500)
      .json({ message: error?.message ?? "Something went wrong" });
  }
}
