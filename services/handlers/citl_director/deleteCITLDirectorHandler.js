import userAbility from "@/services/abilities/defineAbility";
import deleteCITLDirector from "@/services/api/citl_director/deleteCITLDirector";
import readCITLDirector from "@/services/api/citl_director/readCITLDirector";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteCITLDirectorHandler(req, res) {
  const { id } = req.query;

  async function findSubject({ id }) {
    const user = await getServerUser(req, res);

    const subject = await readCITLDirector({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const cITLDirector = await deleteCITLDirector(id);
      return res.status(200).json(cITLDirector);
    },
    action: "delete",
    subject: await findSubject({ id }),
    fields: undefined,
    type: "CITLDirector",
  });
}
