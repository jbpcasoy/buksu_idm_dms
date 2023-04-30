export default async function coordinatorAbility({ can, cannot, user }) {
  can("read", "Coordinator");
}
