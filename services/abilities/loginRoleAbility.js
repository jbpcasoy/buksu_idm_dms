export default async function loginRoleAbility({ can, cannot, user }) {
  if (user) {
    can("createOrUpdate", "LoginRole");
  }
}
