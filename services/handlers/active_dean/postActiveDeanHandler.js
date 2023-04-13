import createActiveDean from "@/services/api/active_dean/createActiveDean";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function postActiveDeanHandler(req, res) {
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const { deanId } = req.body;

      const activeDean = await createActiveDean({ deanId });
      return res.status(201).json(activeDean);
    },
    action: "create",
    subject: "ActiveDean",
    fields: undefined,
    type: "ActiveDean",
  });
}
