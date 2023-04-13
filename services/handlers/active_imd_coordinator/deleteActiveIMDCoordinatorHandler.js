import userAbility from "@/services/abilities/defineAbility";
import deleteActiveIMDCoordinator from "@/services/api/active_imd_coordinator/deleteActiveIMDCoordinator";
import readActiveIMDCoordinator from "@/services/api/active_imd_coordinator/readActiveIMDCoordinator";
import getServerUser from "@/services/helpers/getServerUser";
import statusError from "@/services/helpers/throwError";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteActiveIMDCoordinatorHandler(req, res) {
  const { id } = req.query;

  async function findSubject({ id }) {
    const user = await getServerUser(req, res);
    try {
      const subject = await readActiveIMDCoordinator({
        id,
        ability: await userAbility(user),
      });
      return subject;
    } catch (error) {
      throw statusError({
        statusCode: 403,
        message: "Unauthorized, cannot delete ActiveIMDCoordinator",
      });
    }
  }

  try {
    return abilityValidator({
      req,
      res,
      next: async (req, res) => {
        const activeIMDCoordinator = await deleteActiveIMDCoordinator(id);
        return res.status(200).json(activeIMDCoordinator);
      },
      action: "delete",
      subject: await findSubject({ id }),
      fields: undefined,
      type: "ActiveIMDCoordinator",
    });
  } catch (error) {
    return res
      .status(error?.statusCode ?? 500)
      .json({ message: error?.message });
  }
}
