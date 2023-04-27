export default async function chairpersonSuggestionAbility({
  can,
  cannot,
  user,
}) {
  if (user?.ActiveFaculty?.ActiveChairperson) {
    can("connectToChairpersonSuggestion", "SubmittedChairpersonReview", {
      ChairpersonReview: {
        is: {
          chairpersonId: {
            equals: user.ActiveFaculty.ActiveChairperson.chairpersonId,
          },
        },
      },
    });

    can("read", "ChairpersonSuggestion", {
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
    });
  }

  if (user?.ActiveFaculty) {
    can("read", "ChairpersonSuggestion", {
      SubmittedChairpersonReview: {
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

    can("read", "ChairpersonSuggestion", {
      SubmittedChairpersonReview: {
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

  if (user?.ActiveFaculty?.ActiveCoordinator) {
    can("read", "ChairpersonSuggestion", {
      SubmittedChairpersonReview: {
        is: {
          IM: {
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
        },
      },
    });
  }
}
