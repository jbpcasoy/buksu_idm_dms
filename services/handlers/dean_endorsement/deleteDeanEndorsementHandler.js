import userAbility from "@/services/abilities/defineAbility";
import deleteDeanEndorsement from "@/services/api/dean_endorsement/deleteDeanEndorsement";
import readDeanEndorsement from "@/services/api/dean_endorsement/readDeanEndorsement";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteDeanEndorsementHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  async function findSubject({ id }) {
    const subject = await readDeanEndorsement({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const deanEndorsement = await deleteDeanEndorsement(id);
      return res.status(200).json(deanEndorsement);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "DeanEndorsement",
  });
}
