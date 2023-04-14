import createDean from "@/services/api/dean/createDean";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function postDeanHandler(req, res) {
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const { facultyId } = req.body;

      const dean = await createDean({ facultyId });
      return res.status(201).json(dean);
    },
    action: "create",
    subject: "Dean",
    fields: undefined,
    type: "Dean",
  });
}
