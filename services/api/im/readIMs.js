const { PrismaClient } = require("@prisma/client");

export default async function readIMs({
  page,
  limit,
  serialNumber,
  title,
  status,
}) {
  const prisma = new PrismaClient();

  try {
    const ims = await prisma.iM.findMany({
      take: limit,
      skip: (page - 1) * limit,
      include: {
        owner: {
          select: {
            department: {
              select: {
                name: true,
              },
            },
            user: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      where: {
        serialNumber: {
          contains: serialNumber,
          mode: "insensitive",
        },
        title: {
          contains: title,
          mode: "insensitive",
        },
        status: {
          equals: status,
        },
      },
    });

    const total = await prisma.iM.count({
      where: {
        serialNumber: {
          contains: serialNumber,
          mode: "insensitive",
        },
        title: {
          contains: title,
          mode: "insensitive",
        },
        status: {
          equals: status,
        },
      },
    });
    return { data: ims, total };
  } catch (error) {
    throw error;
  }
}
