export default async function submittedCoordinatorReviewAbility({
  can,
  cannot,
  user,
}) {
  if (user?.ActiveFaculty?.ActiveCoordinator) {
    can("connectToSubmittedCoordinatorReview", "CoordinatorReview", {
      coordinatorId: {
        equals: user.ActiveFaculty.ActiveCoordinator.coordinatorId,
      },
    });
  }

  if (user?.ActiveFaculty) {
    can("read", "SubmittedCoordinatorReview", {
      IM: {
        is: {
          owner: {
            departmentId: {
              equals: user.ActiveFaculty.Faculty.departmentId,
            },
          },
        },
      },
    });
  }
}
