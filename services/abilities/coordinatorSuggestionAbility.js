export default async function coordinatorSuggestionAbility({
  can,
  cannot,
  user,
}) {
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

    can("read", "CoordinatorSuggestion", {
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
  }

  if (user?.ActiveFaculty?.ActiveChairperson) {
    can("read", "CoordinatorSuggestion", {
      SubmittedCoordinatorReview: {
        is: {
          IM: {
            is: {
              SubmittedChairpersonReview: {
                is: {
                  ChairpersonReview: {
                    is: {
                      chairpersonId: {
                        equals:
                          user.ActiveFaculty.ActiveChairperson.chairpersonId,
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

  if (user?.ActiveFaculty) {
    can("read", "CoordinatorSuggestion", {
      SubmittedCoordinatorReview: {
        is: {
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
        },
      },
    });

    can("read", "CoordinatorSuggestion", {
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
    });
  }
}
