const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function createAdmin(userId) {
  try {
    const admin = await prisma.admin.create({
      data: {
        User: {
          connect: {
            id: userId,
          },
        },
      },
    });

    console.log("Admin set:", admin);
    return admin;
  } catch (error) {
    switch (error.code) {
      case "P2014":
        console.log(`Admin '${userId}' already exists.`);
        break;
      default:
        throw error;
    }
  }
}

async function main() {
  const adminIds = process.env.ADMINS.split(", ");

  for (let adminId of adminIds) {
    const admin = await createAdmin(adminId);
  }
}

main()
  .then(() => {
    console.log("Setting up admins finished successfully");
  })
  .catch((e) => {
    console.log("Setting up admins failed, err: ", e);
    process.exit();
  });
