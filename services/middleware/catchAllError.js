import { ForbiddenError } from "@casl/ability";
import { Prisma } from "@prisma/client";
import logger from "../api/logger";
import formatPrismaError from "../helpers/formatPrismaError";

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
