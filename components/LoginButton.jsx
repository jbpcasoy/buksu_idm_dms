import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function LoginButton() {
  const { data: session } = useSession();
  useEffect(() => {
    console.log({ session });
  }, [session]);

  if (session) {
    return (
      <button
        className='text-white hover:text-gray-400'
        onClick={() => signOut()}>
        Sign out
      </button>
    );
  }
  return (
    <button className='text-white hover:text-gray-400' onClick={() => signIn()}>
      Sign in
    </button>
  );
}
