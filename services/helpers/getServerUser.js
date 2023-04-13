import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import getUserByEmail from "./getUserByEmail";

export default async function getServerUser(req, res) {
  try {
    const session = await getServerSession(req, res, authOptions);

    if (!session?.user) {
      console.log({ session });
      const err = new Error("Unauthenticated");
      err.statusCode = 401;
      throw err;
    }

    const user = await getUserByEmail(session?.user?.email);

    return user;
  } catch (error) {
    throw error;
  }
}
