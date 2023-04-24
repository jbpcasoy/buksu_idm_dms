import userAbility from "@/services/abilities/defineAbility";
import getServerUser from "@/services/helpers/getServerUser";

export default async function abilityValidator({
  req,
  res,
  next,
  action,
  subject,
  fields = [],
  type,
}) {
  console.log({
    action,
    subject,
    fields,
    type,
  });
  try {
    const user = await getServerUser(req, res);
    const ability = await userAbility(user);

    if (fields?.length > 0) {
      for (let field of fields) {
        if (ability.cannot(action, subject, field)) {
          console.log("Cannot");
          return res.status(403).json({
            message: `Unauthorized, cannot ${action} ${type} on ${field}`,
          });
        }
        return next(req, res);
      }
    } else {
      if (ability.can(action, subject)) {
        return next(req, res);
      } else {
        return res.status(403).json({
          message: `Unauthorized, cannot ${action} ${type}`,
        });
      }
    }
  } catch (error) {
    console.error(error);
    return res
      .status(error?.statusCode ?? 500)
      .json({ message: error?.message ?? "Something went wrong" });
  }
}
