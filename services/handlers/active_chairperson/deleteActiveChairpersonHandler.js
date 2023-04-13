import deleteActiveChairperson from "@/services/api/active_chairperson/deleteActiveChairperson";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteActiveChairpersonHandler(req, res) {
  return abilityValidator(
    req,
    res,
    async (req, res) => {
      const { id } = req.query;

      const activeChairperson = await deleteActiveChairperson(id);
      return res.status(200).json(activeChairperson);
    },
    "delete",
    "ActiveChairperson",
    undefined,
    "ActiveChairperson"
  );
}
