export default async function submittedIMDCoordinatorSuggestionAbility({
  can,
  cannot,
  user,
}) {
  if (user?.IMDCoordinator?.ActiveIMDCoordinator) {
    can(
      "connectToSubmittedIMDCoordinatorSuggestion",
      "IMDCoordinatorSuggestion",
      {
        iMDCoordinatorId: {
          equals: user.IMDCoordinator.ActiveIMDCoordinator.iMDCoordinatorId,
        },
      }
    );

    can("read", "SubmittedIMDCoordinatorSuggestion", {
      IMDCoordinatorSuggestion: {
        is: {
          iMDCoordinatorId: {
            equals: user.IMDCoordinator.ActiveIMDCoordinator.iMDCoordinatorId,
          },
        },
      },
    });
  }
}
