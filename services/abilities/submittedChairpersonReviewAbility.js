export default async function submittedChairpersonReviewAbility({
  can,
  cannot,
  user,
}) {
  if (user?.ActiveFaculty?.ActiveChairperson) {
    can("connectToSubmittedChairpersonReview", "ChairpersonReview", {
      chairpersonId: {
        equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
      },
    });

    can("read", "SubmittedChairpersonReview", {
      ChairpersonReview: {
        is: {
          chairpersonId: {
            equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
          },
        },
      },
    });
  }

  if (user?.ActiveFaculty?.ActiveCoordinator) {
    can("read", "SubmittedChairpersonReview", {
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

  if (user?.ActiveFaculty) {
    can("read", "SubmittedChairpersonReview", {
      IM: {
        is: {
          SubmittedPeerReview: {
            is: {
              PeerReview: {
                is: {
                  facultyId: {
                    equals: user.ActiveFaculty.facultyId,
                  },
                },
              },
            },
          },
        },
      },
    });

    can("read", "SubmittedChairpersonReview", {
      IM: {
        is: {
          ownerId: {
            equals: user.ActiveFaculty.facultyId,
          },
        },
      },
    });
  }
}
