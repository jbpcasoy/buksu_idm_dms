export default async function peerReviewAbility({ can, cannot, user }) {
  if (user?.ActiveFaculty) {
    can("connectToPeerReview", "IM", {
      owner: {
        is: {
          AND: [
            {
              departmentId: {
                equals: user.ActiveFaculty.departmentId,
              },
            },
            {
              id: {
                not: user.ActiveFaculty.facultyId,
              },
            },
          ],
        },
      },
    });

    can("read", "PeerReview", {
      facultyId: {
        equals: user.ActiveFaculty.facultyId,
      },
    });
  }
}
