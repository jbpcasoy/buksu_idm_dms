import { AbilityBuilder } from "@casl/ability";
import { createPrismaAbility } from "@casl/prisma";

export default async function userAbility(user) {
  console.log({ user: JSON.stringify(user) });
  const { can, cannot, build } = new AbilityBuilder(createPrismaAbility);

  // Global
  if (user?.Admin && user?.LoginRole?.Role === "ADMIN") {
    can("manage", "all");
  }
  // can("read", "all");

  // ActiveFaculty
  can("read", "ActiveFaculty");

  // ActiveFile
  can("connectToActiveFile", "IM", {
    ownerId: {
      equals: user?.ActiveFaculty?.facultyId,
    },
  });
  can("connectToActiveFile", "File", {
    iM: {
      is: {
        ownerId: {
          equals: user?.ActiveFaculty?.facultyId,
        },
      },
    },
  });
  can("delete", "ActiveFile", {
    IM: {
      is: {
        ownerId: {
          equals: user?.ActiveFaculty?.facultyId,
        },
      },
    },
  });
  can("read", "ActiveFile", {
    IM: {
      owner: {
        departmentId: {
          equals: user?.ActiveFaculty?.departmentId,
        },
      },
    },
  });
  can("read", "ActiveFile", {
    IM: {
      is: {
        owner: {
          department: {
            collegeId: {
              equals: user?.ActiveFaculty?.ActiveDean?.collegeId,
            },
          },
        },
      },
    },
  });
  can("update", "ActiveFile", ["fileId"], {
    IM: {
      is: {
        ownerId: {
          equals: user?.ActiveFaculty?.facultyId,
        },
      },
    },
  });

  // College
  can("read", "College");

  return build();
}
