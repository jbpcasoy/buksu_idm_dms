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
      IM: {
        is: {
          owner: {
            departmentId: {
              equals: user.ActiveFaculty.Faculty.departmentId,
            },
          },
        },
      },
    });
  }
}
