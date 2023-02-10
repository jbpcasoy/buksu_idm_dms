import LoginButton from "@/components/LoginButton";
import ProfileFormView from "@/views/ProfileFormView";

export default function Home() {
  return (
    <div>
      <LoginButton />
      <h1>Hello</h1>
      <ProfileFormView onSubmit={(...props) => console.log({ props })} />
    </div>
  );
}
