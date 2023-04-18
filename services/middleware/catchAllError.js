import handler from "@/pages/api/active_chairperson";
import formatPrismaError from "../helpers/formatPrismaError";
import { Prisma } from "@prisma/client";

export default async function catchAllError(req, res, next) {
  try {
    const result = await next(req, res);
    return result;
  } catch (error) {
    console.error(error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      const { statusCode, message } = formatPrismaError(error);
      return res.status(statusCode).json({ error: message });
    }

    return res.status(error?.statusCode ?? 500).json({
      message: error?.message ?? "Something went wrong",
    });
  }
}
