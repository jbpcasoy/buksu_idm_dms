import userAbility from "@/services/abilities/defineAbility";
import readActiveCITLDirector from "@/services/api/active_citl_director/readActiveCITLDirector";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getActiveCITLDirectorHandler(req, res) {
  try {
    const { id } = req.query;
    const user = await getServerUser(req, res);

    // TODO change code to use ability
    const activeCITLDirector = await readActiveCITLDirector({
      id,
      ability: await userAbility(user),
    });
    return res.status(200).json(activeCITLDirector);
  } catch (error) {
    return res
      .status(error?.ability ? 403 : error?.statusCode ?? 500)
      .json({ message: error?.message ?? "Something went wrong" });
  }
}
