export default async function iMAbility({ can, cannot, user }) {
  if (user?.ActiveFaculty?.ActiveDean) {
    can("read", "IM", {
      owner: {
        is: {
          department: {
            is: {
              collegeId: { equals: user.ActiveFaculty.ActiveDean.collegeId },
            },
          },
        },
      },
    });
  }
  if (
    user?.IMDCoordinator?.ActiveIMDCoordinator ||
    user?.CITLDirector?.ActiveCITLDirector
  ) {
    can("read", "IM");
  }
  if (user?.ActiveFaculty) {
    can("create", "IM");
    can("read", "IM", {
      owner: {
        is: {
          departmentId: {
            equals: user.ActiveFaculty.Faculty.departmentId,
          },
        },
      },
    });

    // IM owners can only set title authors and type WHILE IM IS STILL IN DRAFT
    can("update", "IM", ["title", "authors", "type"], {
      ownerId: {
        equals: user.ActiveFaculty.facultyId,
      },
      status: {
        equals: "DRAFT",
      },
    });
    // when IM owners can update status
    can("update", "IM", ["status"], {
      ownerId: {
        equals: user.ActiveFaculty.facultyId,
      },
      ActiveFile: {
        is: {
          fileId: {
            contains: "",
          },
        },
      },
      status: {
        in: ["DRAFT", "DEPARTMENT_REVIEWED", "CITL_REVIEWED"],
      },
    });
  }

  if (user?.ActiveFaculty?.ActiveCoordinator) {
    can("update", "IM", ["status"], {
      ActiveFile: {
        is: {
          fileId: {
            contains: "",
          },
        },
      },
      owner: {
        is: {
          department: {
            is: {
              ActiveCoordinator: {
                is: {
                  coordinatorId: {
                    equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
                  },
                },
              },
            },
          },
        },
      },
      status: {
        in: ["DEPARTMENT_REVISED"],
      },
    });
  }

  if (user?.IMDCoordinator?.ActiveIMDCoordinator) {
    can("update", "IM", ["status"], {
      ActiveFile: {
        is: {
          fileId: {
            contains: "",
          },
        },
      },
      status: {
        in: ["CITL_REVISED"],
      },
    });
  }
}
