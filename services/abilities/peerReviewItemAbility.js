export default async function peerReviewItemAbility({ can, cannot, user }) {
  if (user?.ActiveFaculty) {
    can("connectToPeerReviewItem", "PeerReview", {
      facultyId: {
        equals: user.ActiveFaculty.facultyId,
      },
      IM: {
        is: {
          SubmittedPeerSuggestion: {
            isNot: {
              id: { contains: "" },
            },
          },
        },
      },
    });

    can("read", "PeerReviewItem", {
      PeerReview: {
        is: {
          facultyId: {
            equals: user.ActiveFaculty.facultyId,
          },
        },
      },
    });

    can("delete", "PeerReviewItem", {
      PeerReview: {
        is: {
          facultyId: {
            equals: user.ActiveFaculty.facultyId,
          },
          IM: {
            is: {
              SubmittedPeerSuggestion: {
                isNot: {
                  id: { contains: "" },
                },
              },
            },
          },
        },
      },
    });

    can("update", "PeerReviewItem", ["answer"], {
      PeerReview: {
        is: {
          facultyId: {
            equals: user.ActiveFaculty.facultyId,
          },
          IM: {
            is: {
              SubmittedPeerSuggestion: {
                isNot: {
                  id: { contains: "" },
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
    can("read", "PeerReviewItem");
  }
}
