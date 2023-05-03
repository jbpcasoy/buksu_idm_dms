import userAbility from "@/services/abilities/defineAbility";
import readCoordinatorEndorsement from "@/services/api/coordinator_endorsement/readCoordinatorEndorsement";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getCoordinatorEndorsementHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const coordinatorEndorsement = await readCoordinatorEndorsement({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(coordinatorEndorsement);
}
