const { PrismaClient } = require("@prisma/client");

async function createAdmin(email) {
  try {
    const prisma = new PrismaClient();
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
    await prisma.$disconnect();
    return admin;
  } catch (error) {
    await prisma.$disconnect();

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
  const prisma = new PrismaClient();
  const adminEmails = process.env.ADMINS.split(", ");

  await prisma.admin.deleteMany();

  for (let adminEmail of adminEmails) {
    const admin = await createAdmin(adminEmail);
  }

  await prisma.$disconnect();
}

main()
  .then(() => {
    console.log("Setting up admins finished successfully");
  })
  .catch((e) => {
    console.log("Setting up admins failed, err: ", e);
    process.exit();
  });
