const { PrismaClient } = require("@prisma/client");

const PRISMA_CLIENT = new PrismaClient();
module.exports = {
  PRISMA_CLIENT: PRISMA_CLIENT,
};
