export default async function activeFacultyAbility({ can, cannot, user }) {
  can("read", "ActiveFaculty");
}
