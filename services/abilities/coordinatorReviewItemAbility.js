export default async function coordinatorReviewItemAbility({
  can,
  cannot,
  user,
}) {
  if (user?.ActiveFaculty?.ActiveCoordinator) {
    can("connectToCoordinatorReviewItem", "CoordinatorReview", {
      coordinatorId: {
        equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
      },
      IM: {
        is: {
          SubmittedCoordinatorSuggestion: {
            isNot: {
              id: { contains: "" },
            },
          },
        },
      },
    });

    can("read", "CoordinatorReviewItem", {
      CoordinatorReview: {
        is: {
          coordinatorId: {
            equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
          },
        },
      },
    });

    can("delete", "CoordinatorReviewItem", {
      CoordinatorReview: {
        is: {
          coordinatorId: {
            equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
          },

          IM: {
            is: {
              SubmittedCoordinatorSuggestion: {
                isNot: {
                  id: { contains: "" },
                },
              },
            },
          },
        },
      },
    });

    can("update", "CoordinatorReviewItem", ["answer"], {
      CoordinatorReview: {
        is: {
          coordinatorId: {
            equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
          },
          IM: {
            is: {
              SubmittedCoordinatorSuggestion: {
                isNot: {
                  id: { contains: "" },
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
    can("read", "CoordinatorReviewItem");
  }
}
