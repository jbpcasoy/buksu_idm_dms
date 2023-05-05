export default async function settingsAbility({ can, cannot, user }) {
  if (user) {
    can("read", "Settings");
  }
}
