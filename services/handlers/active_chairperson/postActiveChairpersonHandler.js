import createActiveChairperson from "@/services/api/active_chairperson/createActiveChairperson";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function postActiveChairpersonHandler(req, res) {
  return abilityValidator(
    req,
    res,
    async (req, res) => {
      const { chairpersonId } = req.body;

      const chairperson = await createActiveChairperson({
        chairpersonId,
      });

      return res.status(201).json(chairperson);
    },
    "create",
    "ActiveChairperson",
    undefined,
    "ActiveChairperson"
  );
}
