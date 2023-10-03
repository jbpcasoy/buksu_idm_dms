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
    if (user?.ActiveFaculty?.ActiveDean) {
      can("read", "PeerSuggestion", {
        SubmittedPeerReview: {
          is: {
            IM: {
              is: {
                owner: {
                  is: {
                    department: {
                      is: {
                        collegeId: {
                          equals: user.ActiveFaculty.ActiveDean.collegeId,
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

    can("read", "PeerSuggestion", {
      SubmittedPeerReview: {
        is: {
          IM: {
            is: {
              owner: {
                departmentId: {
                  equals: user.ActiveFaculty.Faculty.departmentId,
                },
              },
            },
          },
        },
      },
    });
  }

  if (
    user?.IMDCoordinator?.ActiveIMDCoordinator ||
    user?.CITLDirector?.ActiveCITLDirector
  ) {
    can("read", "PeerSuggestion");
  }
}
