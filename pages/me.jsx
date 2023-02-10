import ProfileFormView from "@/views/ProfileFormView";

export default function me() {
  return (
    <div>
      <h1>Profile</h1>
      <ProfileFormView onSubmit={(...props) => console.log({ props })} />
    </div>
  );
}
