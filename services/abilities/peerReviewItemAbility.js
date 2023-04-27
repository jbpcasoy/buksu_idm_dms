export default async function peerReviewItemAbility({ can, cannot, user }) {
  if (user?.ActiveFaculty) {
    can("connectToPeerReviewItem", "PeerReview", {
      facultyId: {
        equals: user.ActiveFaculty.facultyId,
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
        },
      },
    });

    can("update", "PeerReviewItem", ["answer"], {
      PeerReview: {
        is: {
          facultyId: {
            equals: user.ActiveFaculty.facultyId,
          },
        },
      },
    });
  }
}
