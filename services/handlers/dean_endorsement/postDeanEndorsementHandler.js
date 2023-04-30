import userAbility from "@/services/abilities/defineAbility";
import readCoordinatorEndorsement from "@/services/api/coordinator_endorsement/readCoordinatorEndorsement";
import createDeanEndorsement from "@/services/api/dean_endorsement/createDeanEndorsement";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postDeanEndorsementHandler(req, res) {
  const { coordinatorEndorsementId } = req.body;
  const user = await getServerUser(req, res);
  const coordinatorEndorsement = await readCoordinatorEndorsement({
    id: coordinatorEndorsementId,
    ability: await userAbility(user),
  });

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const deanEndorsement = await createDeanEndorsement({
        coordinatorEndorsementId,
        deanId: user.ActiveFaculty.ActiveDean.deanId,
        ability: await userAbility(user),
      });
      return res.status(201).json(deanEndorsement);
    },
    action: "connectToDeanEndorsement",
    subject: subject("CoordinatorEndorsement", coordinatorEndorsement),
    fields: undefined,
    type: "CoordinatorEndorsement",
  });
}
