import userAbility from "@/services/abilities/defineAbility";
import readDeanEndorsements from "@/services/api/dean_endorsement/readDeanEndorsements";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getDeanEndorsementsHandler(req, res) {
  const { limit, page } = req.query;
  const user = await getServerUser(req, res);

  const deanEndorsements = await readDeanEndorsements({
    limit: parseInt(limit),
    page: parseInt(page),
    ability: await userAbility(user),
  });
  return res.status(200).json(deanEndorsements);
}
