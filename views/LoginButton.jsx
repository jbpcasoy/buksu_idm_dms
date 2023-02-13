import { useSession } from "next-auth/react";

export default function LoginButton({ onSignOut, onSignIn }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <button className='text-white hover:text-gray-400' onClick={onSignOut}>
        Sign out
      </button>
    );
  }
  return (
    <button className='text-white hover:text-gray-400' onClick={onSignIn}>
      Sign in
    </button>
  );
}
