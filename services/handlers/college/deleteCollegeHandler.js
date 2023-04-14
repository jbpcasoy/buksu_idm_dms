import userAbility from "@/services/abilities/defineAbility";
import deleteCollege from "@/services/api/college/deleteCollege";
import readCollege from "@/services/api/college/readCollege";
import getServerUser from "@/services/helpers/getServerUser";
import statusError from "@/services/helpers/throwError";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteCollegeHandler(req, res) {
  const { id } = req.query;

  async function findSubject({ id }) {
    const user = await getServerUser(req, res);
    try {
      const subject = await readCollege({
        id,
        ability: await userAbility(user),
      });
      return subject;
    } catch (error) {
      console.log(error);
      throw statusError({
        statusCode: 403,
        message: "Unauthorized, cannot delete College",
      });
    }
  }

  try {
    return abilityValidator({
      req,
      res,
      next: async (req, res) => {
        const college = await deleteCollege(id);

        res.status(200).json(college);
      },
      action: "delete",
      subject: await findSubject({ id }),
      fields: undefined,
      type: "College",
    });
  } catch (error) {
    return res
      .status(error?.statusCode ?? 500)
      .json({ message: error?.message });
  }
}
