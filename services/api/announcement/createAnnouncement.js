import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createAnnouncement({ title, description, link }) {
  const prisma = PRISMA_CLIENT;

  const announcement = await prisma.announcement.create({
    data: {
      title,
      description,
      link,
    },
  });
  return announcement;
}
