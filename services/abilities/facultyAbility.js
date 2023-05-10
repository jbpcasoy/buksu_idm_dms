export default async function facultyAbility({ can, cannot, user }) {
  if (user) {
    can("read", "Faculty", {
      userId: user.id,
    });
  }
}
