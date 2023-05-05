const { PrismaClient } = require("@prisma/client");
const { PRISMA_CLIENT } = require("./prisma/prisma_client");

const prisma = PRISMA_CLIENT;

async function createAdmin(email) {
  try {
    const admin = await prisma.admin.create({
      data: {
        User: {
          connect: {
            email: email,
          },
        },
      },
    });

    console.log("Admin set:", admin);
    return admin;
  } catch (error) {
    switch (error.code) {
      case "P2014":
        console.log(`Admin '${email}' already exists.`);
        break;
      default:
        throw error;
    }
  }
}

async function main() {
  const adminEmails = process.env.ADMINS.split(", ");

  await prisma.admin.deleteMany();

  for (let adminEmail of adminEmails) {
    const admin = await createAdmin(adminEmail);
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
