import userAbility from "@/services/abilities/defineAbility";
import deleteCoordinatorEndorsement from "@/services/api/coordinator_endorsement/deleteCoordinatorEndorsement";
import readCoordinatorEndorsement from "@/services/api/coordinator_endorsement/readCoordinatorEndorsement";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteCoordinatorEndorsementHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  async function findSubject({ id }) {
    const subject = await readCoordinatorEndorsement({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const coordinatorEndorsement = await deleteCoordinatorEndorsement(id);
      return res.status(200).json(coordinatorEndorsement);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "CoordinatorEndorsement",
  });
}
