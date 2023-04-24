import userAbility from "@/services/abilities/defineAbility";
import createCoordinatorEndorsement from "@/services/api/coordinator_endorsement/createCoordinatorEndorsement";
import readIM from "@/services/api/im/readIM";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postCoordinatorEndorsementHandler(req, res) {
  const { iMId } = req.body;
  const user = await getServerUser(req, res);
  const iM = await readIM(iMId);

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const coordinatorEndorsement = await createCoordinatorEndorsement({
        iMId,
        coordinatorId: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
        ability: await userAbility(user),
      });
      return res.status(201).json(coordinatorEndorsement);
    },
    action: "connectToCoordinatorEndorsement",
    subject: subject("IM", iM),
    fields: undefined,
    type: "IM",
  });
}
