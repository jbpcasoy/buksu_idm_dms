import createCollege from "@/services/api/college/createCollege";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function postCollegeHandler(req, res) {
  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      const { name } = req.body;

      const college = await createCollege({ name });

      return res.status(201).json(college);
    },
    action: "create",
    subject: "College",
    fields: undefined,
    type: "College",
  });
}
