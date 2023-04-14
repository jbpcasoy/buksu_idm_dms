import userAbility from "@/services/abilities/defineAbility";
import deleteFaculty from "@/services/api/faculty/deleteFaculty";
import readFaculty from "@/services/api/faculty/readFaculty";
import getServerUser from "@/services/helpers/getServerUser";
import statusError from "@/services/helpers/throwError";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteFacultyHandler(req, res) {
  const { id } = req.query;

  async function findSubject({ id }) {
    const user = await getServerUser(req, res);
    try {
      const subject = await readFaculty({
        id,
        ability: await userAbility(user),
      });
      return subject;
    } catch (error) {
      console.log(error);
      throw statusError({
        statusCode: 403,
        message: "Unauthorized, cannot delete Faculty",
      });
    }
  }

  try {
    return abilityValidator({
      req,
      res,
      next: async (req, res) => {
        const faculty = await deleteFaculty(id);

        return res.status(200).json(faculty);
      },
      action: "delete",
      subject: await findSubject({ id }),
      fields: undefined,
      type: "Faculty",
    });
  } catch (error) {
    return res
      .status(error?.statusCode ?? 500)
      .json({ message: error?.message });
  }
}
