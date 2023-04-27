export default async function coordinatorEndorsementAbility({
  can,
  cannot,
  user,
}) {
  if (user?.ActiveFaculty?.ActiveCoordinator) {
    can("connectToCoordinatorEndorsement", "IM", {
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
    });

    can("read", "CoordinatorEndorsement", {
      coordinatorId: {
        equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
      },
    });
  }
}
