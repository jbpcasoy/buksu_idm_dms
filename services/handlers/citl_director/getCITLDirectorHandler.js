import userAbility from "@/services/abilities/defineAbility";
import readCITLDirector from "@/services/api/citl_director/readCITLDirector";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getCITLDirectorHandler(req, res) {
  try {
    const { id } = req.query;
    const user = await getServerUser(req, res);

    const cITLDirector = await readCITLDirector({
      id,
      ability: await userAbility(user),
    });
    return res.status(200).json(cITLDirector);
  } catch (error) {
    return res
      .status(error?.ability ? 403 : error?.statusCode ?? 500)
      .json({ message: error?.message ?? "Something went wrong" });
  }
}
