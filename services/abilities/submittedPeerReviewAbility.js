export default async function submittedPeerReviewAbility({
  can,
  cannot,
  user,
}) {
  if (user?.ActiveFaculty) {
    can("connectToSubmittedPeerReview", "PeerReview", {
      facultyId: {
        equals: user.ActiveFaculty.facultyId,
      },
    });

    can("read", "SubmittedPeerReview", {
      PeerReview: {
        is: {
          facultyId: {
            equals: user.ActiveFaculty.facultyId,
          },
        },
      },
    });

    can("read", "SubmittedPeerReview", {
      IM: {
        is: {
          ownerId: {
            equals: user.ActiveFaculty.facultyId,
          },
        },
      },
    });
  }

  if (user?.ActiveFaculty?.ActiveChairperson) {
    can("read", "SubmittedPeerReview", {
      IM: {
        is: {
          SubmittedChairpersonReview: {
            is: {
              ChairpersonReview: {
                is: {
                  chairpersonId: {
                    equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
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
    can("read", "SubmittedPeerReview", {
      IM: {
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
  }
}
