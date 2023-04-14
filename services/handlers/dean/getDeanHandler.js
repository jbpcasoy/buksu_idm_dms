import userAbility from "@/services/abilities/defineAbility";
import readDean from "@/services/api/dean/readDean";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getDeanHandler(req, res) {
  try {
    const { id } = req.query;
    const user = await getServerUser(req, res);

    const dean = await readDean({ id, ability: await userAbility(user) });
    return res.status(200).json(dean);
  } catch (error) {
    return res
      .status(error?.ability ? 403 : error?.statusCode ?? 500)
      .json({ message: error?.message ?? "Something went wrong" });
  }
}
