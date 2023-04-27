export default async function coordinatorReviewAbility({ can, cannot, user }) {
  if (user?.ActiveFaculty?.ActiveCoordinator) {
    can("connectToCoordinatorReview", "IM", {
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
        equals: "SUBMITTED",
      },
    });

    can("read", "CoordinatorReview", {
      coordinatorId: {
        equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
      },
    });
  }
}
