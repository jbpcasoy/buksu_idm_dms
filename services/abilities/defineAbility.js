import { AbilityBuilder } from "@casl/ability";
import { createPrismaAbility } from "@casl/prisma";

export default async function userAbility(user) {
  const { can, cannot, build } = new AbilityBuilder(createPrismaAbility);

  if (user?.Admin && user?.LoginRole?.Role === "ADMIN") {
    can("manage", "all");
  }

  return build();
}
