import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import pino from "pino";
import pretty from "pino-pretty";
const logger = pino(pretty());

export async function reqLog(req, res) {
  if (process.env.NODE_ENV !== "production") return;

  const session = await getServerSession(req, res, authOptions);
  return logger.info(
    `${req.method}: ${req.url}, USER: ${session?.user?.email}`
  );
}

export default logger;
