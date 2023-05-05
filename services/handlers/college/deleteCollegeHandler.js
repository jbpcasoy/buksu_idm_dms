import userAbility from "@/services/abilities/defineAbility";
import deleteCollege from "@/services/api/college/deleteCollege";
import readCollege from "@/services/api/college/readCollege";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function deleteCollegeHandler(req, res) {
  const { id } = req.query;

  async function findSubject({ id }) {
    const user = await getServerUser(req, res);

    const subject = await readCollege({
      id,
      ability: await userAbility(user),
    });
    return subject;
  }

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
}
