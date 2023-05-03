import userAbility from "@/services/abilities/defineAbility";
import readIMDCoordinatorEndorsement from "@/services/api/imd_coordinator_endorsement/readIMDCoordinatorEndorsement";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getIMDCoordinatorEndorsement(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const iMDCoordinatorEndorsement = await readIMDCoordinatorEndorsement({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(iMDCoordinatorEndorsement);
}
