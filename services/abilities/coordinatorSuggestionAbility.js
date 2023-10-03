export default async function coordinatorSuggestionAbility({
  can,
  cannot,
  user,
}) {
  if (user?.ActiveFaculty?.ActiveDean) {
    can("read", "CoordinatorSuggestion", {
      SubmittedCoordinatorReview: {
        is: {
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
        },
      },
    });
  }

  if (user?.ActiveFaculty?.ActiveCoordinator) {
    can("connectToCoordinatorSuggestion", "SubmittedCoordinatorReview", {
      CoordinatorReview: {
        is: {
          coordinatorId: {
            equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
          },
        },
      },
    });
  }

  if (user?.ActiveFaculty) {
    can("read", "CoordinatorSuggestion", {
      SubmittedCoordinatorReview: {
        is: {
          IM: {
            is: {
              owner: {
                departmentId: {
                  equals: user.ActiveFaculty.Faculty.departmentId,
                },
              },
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
    can("read", "CoordinatorSuggestion");
  }
}
