import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import getUserByEmail from "./getUserByEmail";
import statusError from "./throwError";

export default async function getServerUser(req, res) {
  try {
    const session = await getServerSession(req, res, authOptions);

    if (!session?.user) {
      throw statusError({
        statusCode: 401,
        message: "Unauthenticated",
      });
    }

    // removed due to slow response
    // const user = await getUserByEmail(session?.user?.email);
    const user = session.user;

    return user;
  } catch (error) {
    throw error;
  }
}
