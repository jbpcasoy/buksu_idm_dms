import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import pino from "pino";
import pretty from "pino-pretty";
const logger = pino(pretty());

export async function reqLog(req, res) {
  const session = await getServerSession(req, res, authOptions);
  return logger.info(`${req.method}: ${req.url}, USER: ${session?.user?.id}`);
}

export default logger;
