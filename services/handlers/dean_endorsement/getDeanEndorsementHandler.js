import userAbility from "@/services/abilities/defineAbility";
import readDeanEndorsement from "@/services/api/dean_endorsement/readDeanEndorsement";
import getServerUser from "@/services/helpers/getServerUser";

export default async function getDeanEndorsementHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  const deanEndorsement = await readDeanEndorsement({
    id,
    ability: await userAbility(user),
  });
  return res.status(200).json(deanEndorsement);
}
