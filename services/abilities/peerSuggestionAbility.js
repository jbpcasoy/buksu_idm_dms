export default async function peerSuggestionAbility({ can, cannot, user }) {
  if (user?.ActiveFaculty) {
    can("connectToPeerSuggestion", "SubmittedPeerReview", {
      PeerReview: {
        is: {
          facultyId: {
            equals: user.ActiveFaculty.facultyId,
          },
        },
      },
    });

    can("read", "PeerSuggestion", {
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
    });

    can("read", "PeerSuggestion", {
      SubmittedPeerReview: {
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
    can("read", "PeerSuggestion", {
      SubmittedPeerReview: {
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

  if (user?.ActiveFaculty?.ActiveChairperson) {
    can("read", "PeerSuggestion", {
      SubmittedPeerReview: {
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
}
