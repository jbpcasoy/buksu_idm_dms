const { default: client } = require("@/lib/prismadb");
const { PrismaClient } = require("@prisma/client");

const PRISMA_CLIENT = client;
module.exports = {
  PRISMA_CLIENT: PRISMA_CLIENT,
};
