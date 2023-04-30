import userAbility from "@/services/abilities/defineAbility";
import deleteIMDCoordinatorEndorsement from "@/services/api/imd_coordinator_endorsement/deleteIMDCoordinatorEndorsement";
import readIMDCoordinatorEndorsement from "@/services/api/imd_coordinator_endorsement/readIMDCoordinatorEndorsement";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteIMDCoordinatorEndorsementHandler(req, res) {
  const { id } = req.query;
  const user = await getServerUser(req, res);

  async function findSubject({ id }) {
    const subject = await readIMDCoordinatorEndorsement({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const iMDCoordinatorEndorsement = await deleteIMDCoordinatorEndorsement(
        id
      );
      return res.status(200).json(iMDCoordinatorEndorsement);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "IMDCoordinatorEndorsement",
  });
}
