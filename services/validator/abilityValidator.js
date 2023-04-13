import userAbility from "@/services/abilities/defineAbility";
import getServerUser from "@/services/helpers/getServerUser";

export default async function abilityValidator({
  req,
  res,
  next,
  action,
  subject,
  fields,
  type,
}) {
  try {
    const user = await getServerUser(req, res);
    const ability = await userAbility(user);

    if (ability.can(action, subject, fields)) {
      return next(req, res);
    }

    return res
      .status(403)
      .json({ message: `Unauthorized, cannot ${action} ${type}` });
  } catch (error) {
    return res
      .status(error?.statusCode ?? 500)
      .json({ message: error?.message ?? "Something went wrong" });
  }
}
