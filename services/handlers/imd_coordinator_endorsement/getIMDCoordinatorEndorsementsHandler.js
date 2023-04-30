import userAbility from "@/services/abilities/defineAbility";
import readIMDCoordinatorEndorsements from "@/services/api/imd_coordinator_endorsement/readIMDCoordinatorEndorsements";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getIMDCoordinatorEndorsementsHandler(req, res) {
  const { limit, page } = await req.query;
  const user = await getServerUser(req, res);

  const iMDCoordinatorEndorsements = await readIMDCoordinatorEndorsements({
    limit: parseInt(limit),
    page: parseInt(page),
    ability: await userAbility(user),
  });

  return res.status(200).json(iMDCoordinatorEndorsements);
}
