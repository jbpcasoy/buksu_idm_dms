import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function updateAnnouncement({
  id,
  data: { title, description, link },
}) {
  const prisma = PRISMA_CLIENT;

  const announcement = await prisma.announcement.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      link,
    },
  });

  return announcement;
}
