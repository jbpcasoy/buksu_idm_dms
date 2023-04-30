import createCITLDirector from "@/services/api/citl_director/createCITLDirector";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function postCITLDirectorHandler(req, res) {
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const { userId } = req.body;

      const cITLDirector = await createCITLDirector({
        userId,
      });
      return res.status(201).json(cITLDirector);
    },
    action: "create",
    subject: "CITLDirector",
    fields: undefined,
    type: "CITLDirector",
  });
}
