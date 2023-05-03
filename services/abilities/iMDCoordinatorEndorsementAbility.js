export default async function iMDCoordinatorEndorsementAbility({
  can,
  cannot,
  user,
}) {
  if (user?.IMDCoordinator?.ActiveIMDCoordinator) {
    can(
      "connectToIMDCoordinatorEndorsement",
      "SubmittedIMDCoordinatorSuggestion",
      {
        IMDCoordinatorSuggestion: {
          is: {
            iMDCoordinatorId: {
              // NOTE to ensure that the current user was an  active IMDCoordinator
              // and the owner of the IMDCoordinatorEndorsement
              equals: user.IMDCoordinator.ActiveIMDCoordinator.iMDCoordinatorId,
            },
          },
        },
      }
    );

    can("read", "IMDCoordinatorEndorsement", {
      iMDCoordinatorId: {
        equals: user.IMDCoordinator.ActiveIMDCoordinator.iMDCoordinatorId,
      },
    });
  }
}
