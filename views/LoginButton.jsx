import { useSession } from "next-auth/react";

export default function LoginButton({ onSignOut, onSignIn }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <button
        onClick={onSignOut}
        title='Sign out'
        role='menuitem'
        className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left'
      >
        {" "}
        Sign out
      </button>
    );
  }
  return (
    <button
      onClick={onSignIn}
      title='Sign in'
      role='menuitem'
      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left'
    >
      Sign in
    </button>
  );
}
