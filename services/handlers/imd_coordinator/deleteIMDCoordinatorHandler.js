import userAbility from "@/services/abilities/defineAbility";
import deleteIMDCoordinator from "@/services/api/imd_coordinator/deleteIMDCoordinator";
import readIMDCoordinator from "@/services/api/imd_coordinator/readIMDCoordinator";
import getServerUser from "@/services/helpers/getServerUser";
import statusError from "@/services/helpers/throwError";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteIMDCoordinatorHandler(req, res) {
  const { id } = req.query;
  async function findSubject({ id }) {
    const user = await getServerUser(req, res);
    try {
      const subject = await readIMDCoordinator({
        id,
        ability: await userAbility(user),
      });
      return subject;
    } catch (error) {
      console.log(error);
      throw statusError({
        statusCode: 403,
        message: "Unauthorized, cannot delete IMDCoordinator",
      });
    }
  }

  try {
    return abilityValidator({
      req,
      res,
      next: async (req, res) => {
        const iMDCoordinator = await deleteIMDCoordinator(id);
        return res.status(200).json(iMDCoordinator);
      },
      action: "delete",
      subject: await findSubject({ id }),
      fields: undefined,
      type: "IMDCoordinator",
    });
  } catch (error) {
    return res
      .status(error?.statusCode ?? 500)
      .json({ message: error?.message });
  }
}
