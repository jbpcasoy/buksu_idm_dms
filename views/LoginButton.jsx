import { useSession } from "next-auth/react";

export default function LoginButton({ onSignOut, onSignIn }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <button onClick={onSignOut} title="Sign out" className="text-CITLWhite">
        {" "}
        Sign out
      </button>
    );
  }
  return (
    <button onClick={onSignIn} title="Sign in " className="text-CITLWhite">
      Sign in
    </button>
  );
}
