import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import LoginButton from "../LoginButton";

export default function Header() {
  const router = useRouter();

  return (
    <header className=" flex items-center justify-between flex-wrap bg-CITLDarkBlue pl-4 pr-6">
      <a href="/">
        <img src="/IMAGES/BukSUIMD.png" alt="Logo" className="w-64"></img>
      </a>
      <nav className="flex items-center">
        <a
          href="/"
          title="Search"
          className="text-white mr-4 hover:text-gray-400"
        >
          <i className="fi fi-br-search text-white text-lg"></i>
        </a>
        <a
          href="/me"
          title="User"
          className="text-white mr-4 hover:text-gray-400"
        >
          <i className="fi fi-sr-user  text-white text-lg"></i>
        </a>

        <LoginButton onSignIn={signIn} onSignOut={signOut} />
      </nav>
    </header>
    // <nav className='flex items-center justify-between flex-wrap bg-gray-800 p-4'>
    //   <ul className='flex'>
    //   <img src="/IMAGES/BukSUIMD.png" alt="Logo" className="w-64"></img>
    //     <li className='mr-6'>
    //       <Link
    //         className={`text-white hover:text-gray-400 ${
    //           router.asPath === "/" ? "underline" : ""
    //         }`}
    //         href='/'>
    //         Home
    //       </Link>
    //     </li>
    //     <li className='mr-6'>
    //       <Link
    //         className={`text-white hover:text-gray-400 ${
    //           router.asPath === "/me" ? "underline" : ""
    //         }`}
    //         href='/me'>
    //         Profile
    //       </Link>
    //     </li>
    //     <li className='mr-6'>
    //       <LoginButton onSignIn={signIn} onSignOut={signOut} />
    //     </li>
    //   </ul>
    // </nav>
  );
}
