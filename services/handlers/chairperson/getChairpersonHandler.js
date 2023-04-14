import userAbility from "@/services/abilities/defineAbility";
import readChairperson from "@/services/api/chairperson/readChairperson";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getChairpersonHandler(req, res) {
  try {
    const { id } = req.query;
    const user = await getServerUser(req, res);

    const chairperson = await readChairperson({
      id,
      ability: await userAbility(user),
    });
    return res.status(200).json(chairperson);
  } catch (error) {
    return res
      .status(error?.ability ? 403 : error?.statusCode ?? 500)
      .json({ message: error?.message ?? "Something went wrong" });
  }
}
