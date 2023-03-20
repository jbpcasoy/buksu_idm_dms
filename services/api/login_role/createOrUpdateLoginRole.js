import { PrismaClient } from "@prisma/client";

export default async function createOrUpdateLoginRole({ userId, Role }) {
  try {
    const user = await findUser({ userId, Role });
    const prisma = new PrismaClient();
    try {
      const loginRole = await prisma.loginRole.update({
        where: {
          userId: user.id,
        },
        data: {
          Role,
        },
      });

      return loginRole;
    } catch (err) {
      const loginRole = await prisma.loginRole.create({
        data: {
          userId: user.id,
          Role,
        },
      });

      return loginRole;
    }
  } catch (error) {
    throw error;
  }
}

async function findUser({ userId, Role }) {
  try {
    const prisma = new PrismaClient();
    switch (Role) {
      case "ADMIN":
        return prisma.user.findFirstOrThrow({
          where: {
            Admin: {
              userId,
            },
          },
        });
      case "UNAUTHORIZED": // Same behavior as case "FACULTY"
      case "FACULTY":
        return prisma.user.findUniqueOrThrow({
          where: {
            id: userId,
          },
        });
      default:
        throw new Error(`Error: ${Role} is not supported.`);
    }
  } catch (error) {
    throw error;
  }
}
