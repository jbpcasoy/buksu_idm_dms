import handler from "@/pages/api/active_chairperson";
import formatPrismaError from "../helpers/formatPrismaError";
import { Prisma } from "@prisma/client";
import { ForbiddenError } from "@casl/ability";
import logger from "../api/logger";

export default async function catchAllError(req, res, next) {
  try {
    const result = await next(req, res);
    return result;
  } catch (error) {
    logger.error(error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      const { statusCode, message } = formatPrismaError(error);
      return res.status(statusCode).json({ error: message });
    } else if (error instanceof ForbiddenError) {
      return res.status(403).json({
        error: error?.message ?? "Something went wrong",
      });
    }

    return res.status(error?.statusCode ?? 500).json({
      error: error?.message ?? "Something went wrong",
    });
  }
}
