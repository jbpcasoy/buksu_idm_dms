import { useSession } from "next-auth/react";

export default function LoginButton({ onSignOut, onSignIn }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <button onClick={onSignOut} title="Sign out">
        <i class="fi fi-br-sign-out-alt text-white text-lg"></i>
      </button>
    );
  }
  return (
    <button onClick={onSignIn} title="Sign in">
      <i class="fi fi-br-sign-in-alt  text-white text-lg"></i>
    </button>
  );
}
