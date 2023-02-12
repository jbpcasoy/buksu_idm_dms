import { PrismaClient } from "@prisma/client";

export async function updateUser(id, data) {
  const prisma = new PrismaClient();

  try {
    const updatedUser = await prisma.user.update({
      where: { id: id },
      data: data,
    });

    console.log("User updated successfully:", updatedUser);
    return updatedUser;
  } catch (error) {
    console.error("Error updating user:", error);
  }
}
