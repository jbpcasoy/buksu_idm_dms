import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import LoginButton from "../LoginButton";

export default function Header() {
  const router = useRouter();

  return (
    <nav className='flex items-center justify-between flex-wrap bg-gray-800 p-6'>
      <ul className='flex'>
        <li className='mr-6'>
          <Link
            className={`text-white hover:text-gray-400 ${
              router.asPath === "/" ? "underline" : ""
            }`}
            href='/'>
            Home
          </Link>
        </li>
        <li className='mr-6'>
          <Link
            className={`text-white hover:text-gray-400 ${
              router.asPath === "/me" ? "underline" : ""
            }`}
            href='/me'>
            Profile
          </Link>
        </li>
        <li className='mr-6'>
          <LoginButton onSignIn={signIn} onSignOut={signOut} />
        </li>
      </ul>
    </nav>
  );
}
