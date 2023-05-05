export default async function activeFileAbility({ can, cannot, user }) {
  if (user?.ActiveFaculty) {
    can("connectToActiveFile", "IM", {
      ownerId: {
        equals: user.ActiveFaculty.facultyId,
      },
      status: {
        in: ["DRAFT", "DEPARTMENT_REVIEWED", "CITL_REVIEWED"],
      },
    });
    can("connectToActiveFile", "File", {
      iM: {
        is: {
          ownerId: {
            equals: user.ActiveFaculty.facultyId,
          },
        },
        status: {
          in: ["DRAFT", "DEPARTMENT_REVIEWED", "CITL_REVIEWED"],
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
          status: {
            in: ["DRAFT", "DEPARTMENT_REVIEWED", "CITL_REVIEWED"],
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
}
