import { authOptions } from "@/pages/api/auth/[...nextauth]";
import createOrUpdateLoginRole from "@/services/api/login_role/createOrUpdateLoginRole";
import { getServerSession } from "next-auth";

export default async function loginRoleHandler(req, res) {
  const { role, redirect } = req.query;
  const session = await getServerSession(req, res, authOptions);

  try {
    await createOrUpdateLoginRole({ userId: session?.user?.id, Role: role });
  } catch (err) {
    await createOrUpdateLoginRole({
      userId: session?.user?.id,
      Role: "UNAUTHORIZED",
    });
  }
  console.log({ role, redirect });
  return res.redirect(redirect);
}
