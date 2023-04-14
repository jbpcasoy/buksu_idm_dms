import userAbility from "@/services/abilities/defineAbility";
import readCollege from "@/services/api/college/readCollege";
import updateCollege from "@/services/api/college/updateCollege";
import getServerUser from "@/services/helpers/getServerUser";
import statusError from "@/services/helpers/throwError";
import abilityValidator from "@/services/validator/abilityValidator";
import { subject } from "@casl/ability";

export default async function putCollegeHandler(req, res) {
  const { name } = req.body;
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
      throw statusError({
        statusCode: 403,
        message: "Unauthorized, cannot delete College",
      });
    }
  }

  try {
    const user = await getServerUser(req, res);
    const college = await findSubject({ id });
    return abilityValidator({
      req,
      res,
      next: async (req, res) => {
        const college = await updateCollege(id, {
          name,
        });

        return res.status(200).json(college);
      },
      action: "update",
      subject: subject("College", college),
      fields: undefined,
      type: "College",
    });
  } catch (error) {
    return res
      .status(error?.statusCode ?? 500)
      .json({ message: error?.message });
  }
}
