import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteAnnouncement({ id }) {
  const prisma = PRISMA_CLIENT;

  const announcement = await prisma.announcement.delete({
    where: {
      id,
    },
  });
  return announcement;
}
