import { useRouter } from "next/router";
import LoginButton from "../LoginButton";

export default function Header() {
  const router = useRouter();

  return (
    <nav className='flex items-center justify-between flex-wrap bg-gray-800 p-6'>
      <ul className='flex'>
        <li className='mr-6'>
          <a
            className={`text-white hover:text-gray-400 ${
              router.asPath === "/" ? "underline" : ""
            }`}
            href='/'>
            Home
          </a>
        </li>
        <li className='mr-6'>
          <a
            className={`text-white hover:text-gray-400 ${
              router.asPath === "/me" ? "underline" : ""
            }`}
            href='/me'>
            Profile
          </a>
        </li>
        <li className='mr-6'>
          <LoginButton />
        </li>
      </ul>
    </nav>
  );
}
