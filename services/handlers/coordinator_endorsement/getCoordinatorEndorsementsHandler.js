import userAbility from "@/services/abilities/defineAbility";
import readCoordinatorEndorsements from "@/services/api/coordinator_endorsement/readCoordinatorEndorsements";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getCoordinatorEndorsementsHandler(req, res) {
  const { limit, page } = req.query;
  const user = await getServerUser(req, res);

  const coordinatorEndorsements = await readCoordinatorEndorsements({
    limit: parseInt(limit),
    page: parseInt(page),
    ability: await userAbility(user),
  });
  return res.status(200).json(coordinatorEndorsements);
}
