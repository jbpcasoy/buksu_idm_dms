import userAbility from "@/services/abilities/defineAbility";
import deleteActiveFaculty from "@/services/api/active_faculty/deleteActiveFaculty";
import readActiveFaculty from "@/services/api/active_faculty/readActiveFaculty";
import getServerUser from "@/services/helpers/getServerUser";
import statusError from "@/services/helpers/throwError";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteActiveFacultyHandler(req, res) {
  const { id } = req.query;

  async function findSubject({ id }) {
    const user = await getServerUser(req, res);
    try {
      const subject = await readActiveFaculty({
        id,
        ability: await userAbility(user),
      });
      return subject;
    } catch (error) {
      console.log(error);
      throw statusError({
        statusCode: 403,
        message: "Unauthorized, cannot delete ActiveFaculty",
      });
    }
  }

  try {
    return abilityValidator({
      req,
      res,
      next: async (req, res) => {
        const activeFaculty = await deleteActiveFaculty(id);

        return res.status(200).json(activeFaculty);
      },
      action: "delete",
      subject: await findSubject({ id }),
      fields: undefined,
      type: "ActiveFaculty",
    });
  } catch (error) {
    return res
      .status(error?.statusCode ?? 500)
      .json({ message: error?.message });
  }
}
