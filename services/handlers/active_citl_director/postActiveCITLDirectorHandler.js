import createActiveCITLDirector from "@/services/api/active_citl_director/createActiveCITLDirector";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function postActiveCITLDirectorHandler(req, res) {
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const { cITLDirectorId } = req.body;

      const activeCITLDirector = await createActiveCITLDirector({
        cITLDirectorId,
      });
      return res.status(201).json(activeCITLDirector);
    },
    action: "create",
    subject: "ActiveCITLDirector",
    fields: undefined,
    type: "ActiveCITLDirector",
  });
}
