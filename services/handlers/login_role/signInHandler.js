import createOrUpdateLoginRole from "@/services/api/login_role/createOrUpdateLoginRole";
import getServerUser from "@/services/helpers/getServerUser";
import abilityValidator from "@/services/validator/abilityValidator";

export default async function loginRoleHandler(req, res) {
  const { role, redirect } = req.query;
  const user = await getServerUser(req, res);

  return abilityValidator({
    req,
    res,
    next: async (req, res) => {
      try {
        await createOrUpdateLoginRole({ userId: user?.id, Role: role });

        return res.redirect(redirect ?? "/");
      } catch (err) {
        return res.redirect(`/?error=${err.message}`);
      }
    },
    action: "createOrUpdate",
    subject: "LoginRole",
    fields: undefined,
    type: "LoginRole",
  });
}
