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
  if (user?.ActiveFaculty) {
    can("connectToActiveFile", "IM", {
      ownerId: {
        equals: user.ActiveFaculty.facultyId,
      },
    });
    can("connectToActiveFile", "File", {
      iM: {
        is: {
          ownerId: {
            equals: user.ActiveFaculty.facultyId,
          },
        },
      },
    });
    can("delete", "ActiveFile", {
      IM: {
        is: {
          ownerId: {
            equals: user.ActiveFaculty.facultyId,
          },
        },
      },
    });
    can("read", "ActiveFile", {
      IM: {
        is: {
          owner: {
            is: {
              departmentId: {
                equals: user.ActiveFaculty.departmentId,
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
  }
  if (user?.ActiveFaculty?.ActiveDean) {
    can("read", "ActiveFile", {
      IM: {
        is: {
          owner: {
            is: {
              department: {
                is: {
                  collegeId: {
                    equals: user.ActiveFaculty.ActiveDean.collegeId,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  // College
  can("read", "College");

  // Department
  can("read", "Department");

  // ChairpersonReview
  if (user?.ActiveFaculty?.ActiveChairperson) {
    can("connectToChairpersonReview", "IM", {
      owner: {
        is: {
          department: {
            is: {
              ActiveChairperson: {
                is: {
                  chairpersonId: {
                    equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
                  },
                },
              },
            },
          },
        },
      },
    });

    can("read", "ChairpersonReview", {
      chairpersonId: {
        equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
      },
    });

    // ChairpersonReviewItem
    if (user?.ActiveFaculty?.ActiveChairperson) {
      can("connectToChairpersonReviewItem", "ChairpersonReview", {
        chairpersonId: {
          equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
        },
      });

      can("read", "ChairpersonReviewItem", {
        ChairpersonReview: {
          is: {
            chairpersonId: {
              equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
            },
          },
        },
      });

      can("update", "ChairpersonReviewItem", ["answer"], {
        ChairpersonReview: {
          is: {
            chairpersonId: {
              equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
            },
          },
        },
      });
    }
  }

  // SubmittedChairpersonReview
  if (user?.ActiveFaculty?.ActiveChairperson) {
    can("connectToSubmittedChairpersonReview", "ChairpersonReview", {
      chairpersonId: {
        equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
      },
    });

    can("read", "SubmittedChairpersonReview", {
      ChairpersonReview: {
        is: {
          chairpersonId: {
            equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
          },
        },
      },
    });
  }

  // ChairpersonSuggestion
  if (user?.ActiveFaculty?.ActiveChairperson) {
    can("connectToChairpersonSuggestion", "SubmittedChairpersonReview", {
      ChairpersonReview: {
        is: {
          chairpersonId: {
            equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
          },
        },
      },
    });

    can("read", "ChairpersonSuggestion", {
      SubmittedChairpersonReview: {
        ChairpersonReview: {
          is: {
            chairpersonId: {
              equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
            },
          },
        },
      },
    });
  }

  return build();
}
