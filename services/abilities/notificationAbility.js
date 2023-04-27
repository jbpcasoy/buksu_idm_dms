export default async function notificationAbility({ can, cannot, user }) {
  can("read", "Notification");
}
