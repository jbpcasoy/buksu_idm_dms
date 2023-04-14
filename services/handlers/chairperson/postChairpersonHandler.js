import createChairperson from "@/services/api/chairperson/createChairperson";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function postChairpersonHandler(req, res) {
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const { facultyId } = req.body;

      const chairperson = await createChairperson({ facultyId });
      return res.status(201).json(chairperson);
    },
    action: "create",
    subject: "Chairperson",
    fields: undefined,
    type: "Chairperson",
  });
}
