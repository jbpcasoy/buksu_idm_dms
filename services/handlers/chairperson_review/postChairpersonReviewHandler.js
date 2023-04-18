import createChairpersonReview from "@/services/api/chairperson_review/createChairpersonReview";
import readIM from "@/services/api/im/readIM";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function postChairpersonReviewHandler(req, res) {
  const { iMId } = req.body;

  const user = await getServerUser(req, res);
  const iM = await readIM(iMId);
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const chairpersonReview = await createChairpersonReview({
        chairpersonId: user.ActiveFaculty.ActiveChairperson.chairpersonId,
        iMId,
      });
      return res.status(201).json(chairpersonReview);
    },
    action: "connectToChairpersonReview",
    subject: subject("IM", iM),
    fields: undefined,
    type: "IM",
  });
}
