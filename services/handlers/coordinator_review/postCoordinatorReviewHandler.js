import createCoordinatorReview from "@/services/api/coordinator_review/createCoordinatorReview";
import readIM from "@/services/api/im/readIM";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postCoordinatorReviewHandler(req, res) {
  const { iMId } = req.body;

  const user = await getServerUser(req, res);
  const iM = await readIM(iMId);
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const coordinatorReview = await createCoordinatorReview({
        iMId,
        coordinatorId: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
      });
      return res.status(201).json(coordinatorReview);
    },
    action: "connectToCoordinatorReview",
    subject: subject("IM", iM),
    fields: undefined,
    type: "IM",
  });
}
