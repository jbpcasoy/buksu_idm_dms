export default async function fileAbility({ can, cannot, user }) {
  if (user?.ActiveFaculty) {
    can("connectToFile", "IM", {
      ownerId: {
        equals: user.ActiveFaculty.facultyId,
      },
    });
  }
  can("read", "File");
}
