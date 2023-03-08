const { PrismaClient } = require("@prisma/client");

export default async function readIMs({
  page,
  limit,
  serialNumber,
  title,
  status,
  ownerId,
  notOwnerId,
  departmentId,
}) {
  const prisma = new PrismaClient();

  try {
    const ims = await prisma.iM.findMany({
      take: limit,
      skip: (page - 1) * limit,
      include: {
        SubmittedPeerReview: true,
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
        AND: [
          {
            ownerId: {
              not: notOwnerId,
            },
          },
          {
            owner: {
              departmentId: departmentId,
            },
            ownerId: ownerId,
            serialNumber: {
              contains: serialNumber,
              // mode: "insensitive",
            },
            title: {
              contains: title,
              // mode: "insensitive",
            },
            status: {
              equals: status,
            },
          },
        ],
      },
    });

    const total = await prisma.iM.count({
      where: {
        AND: [
          {
            ownerId: {
              not: notOwnerId,
            },
          },
          {
            owner: {
              departmentId: departmentId,
            },
            ownerId: ownerId,
            serialNumber: {
              contains: serialNumber,
              // mode: "insensitive",
            },
            title: {
              contains: title,
              // mode: "insensitive",
            },
            status: {
              equals: status,
            },
          },
        ],
      },
    });
    return { data: ims, total };
  } catch (error) {
    throw error;
  }
}
