import userAbility from "@/services/abilities/defineAbility";
import deleteActiveCITLDirector from "@/services/api/active_citl_director/deleteActiveCITLDirector";
import readActiveCITLDirector from "@/services/api/active_citl_director/readActiveCITLDirector";
import getServerUser from "@/services/helpers/getServerUser";
import statusError from "@/services/helpers/throwError";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteActiveCITLDirectorHandler(req, res) {
  const { id } = req.query;

  async function findSubject({ id }) {
    const user = await getServerUser(req, res);
    try {
      const subject = await readActiveCITLDirector({
        id,
        ability: await userAbility(user),
      });
      return subject;
    } catch (error) {
      console.log(error);
      throw statusError({
        statusCode: 403,
        message: "Unauthorized, cannot delete ActiveCITLDirector",
      });
    }
  }

  try {
    return abilityValidator({
      req,
      res,
      next: async (req, res) => {
        const activeCITLDirector = await deleteActiveCITLDirector(id);
        return res.status(200).json(activeCITLDirector);
      },
      action: "delete",
      subject: await findSubject({ id }),
      fields: undefined,
      type: "ActiveCITLDirector",
    });
  } catch (error) {
    return res
      .status(error?.statusCode ?? 500)
      .json({ message: error?.message });
  }
}
