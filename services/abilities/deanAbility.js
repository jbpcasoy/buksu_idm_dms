export default async function deanAbility({ can, cannot, user }) {
  if (user?.ActiveFaculty?.ActiveDean) {
    can("read", "Dean");
  }
}
