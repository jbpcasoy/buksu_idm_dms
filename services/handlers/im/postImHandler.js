import createIM from "@/services/api/im/createIM";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function postImHandler(req, res) {
  const { title, authors, type } = req.body;
  const user = await getServerUser(req, res);

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const im = await createIM({
        title,
        ownerId: user.ActiveFaculty.facultyId,
        authors,
        type,
      });

      return res.status(201).json(im);
    },
    action: "create",
    subject: "IM",
    fields: undefined,
    type: "IM",
  });
}
