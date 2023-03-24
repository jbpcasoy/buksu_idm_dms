import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function putUser(id, { name, image }) {
  const prisma = PRISMA_CLIENT;

  try {
    const user = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        image,
      },
    });

    return user;
  } catch (error) {
    throw error;
  }
}
