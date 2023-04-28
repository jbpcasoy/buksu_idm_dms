export default async function coordinatorSuggestionItemAbility({
  can,
  cannot,
  user,
}) {
  if (user?.ActiveFaculty?.ActiveCoordinator) {
    can("connectToCoordinatorSuggestionItem", "CoordinatorSuggestion", {
      SubmittedCoordinatorReview: {
        is: {
          CoordinatorReview: {
            is: {
              coordinatorId: {
                equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
              },
            },
          },
        },
      },
    });

    can("delete", "CoordinatorSuggestionItem", {
      CoordinatorSuggestion: {
        is: {
          SubmittedCoordinatorReview: {
            is: {
              CoordinatorReview: {
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
    });

    can(
      "update",
      "CoordinatorSuggestionItem",
      ["value", "pageNumber", "remarks"],
      {
        CoordinatorSuggestion: {
          is: {
            SubmittedCoordinatorReview: {
              is: {
                CoordinatorReview: {
                  is: {
                    coordinatorId: {
                      equals:
                        user.ActiveFaculty.ActiveCoordinator.coordinatorId,
                    },
                  },
                },
              },
            },
          },
        },
      }
    );
  }

  if (user?.ActiveFaculty) {
    can("update", "CoordinatorSuggestionItem", ["actionTaken"], {
      CoordinatorSuggestion: {
        is: {
          SubmittedCoordinatorReview: {
            is: {
              IM: {
                is: {
                  ownerId: {
                    equals: user.ActiveFaculty.facultyId,
                  },
                },
              },
            },
          },
        },
      },
    });

    can("read", "CoordinatorSuggestionItem", {
      CoordinatorSuggestion: {
        is: {
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
        },
      },
    });
  }

  if (
    user?.IMDCoordinator?.ActiveIMDCoordinator ||
    user?.CITLDirector?.ActiveCITLDirector
  ) {
    can("read", "CoordinatorSuggestionItem");
  }
}
