import userAbility from "@/services/abilities/defineAbility";
import readActiveChairpersons from "@/services/api/active_chairperson/readActiveChairpersons";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getActiveChairpersonsHandler(req, res) {
  try {
    const { limit, page } = req.query;

    const user = await getServerUser(req, res);

    const activeChairpersons = await readActiveChairpersons({
      limit: parseInt(limit),
      page: parseInt(page),
      ability: await userAbility(user),
    });

    return res.status(200).json(activeChairpersons);
  } catch (error) {
    return res
      .status(error?.ability ? 403 : error?.statusCode ?? 500)
      .json({ message: error?.message ?? "Something went wrong" });
  }
}
