import { PrismaClient } from "@prisma/client";

global.prisma = global.prisma || new PrismaClient();

module.exports =
  process.env.NODE_ENV === "production" ? undefined : global.prisma;
