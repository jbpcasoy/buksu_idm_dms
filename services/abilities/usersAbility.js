export default async function usersAbility({ can, cannot, user }) {
  can("read", "User");
  can("update", "User", {
    id: {
      equals: user.id,
    },
  });
}
