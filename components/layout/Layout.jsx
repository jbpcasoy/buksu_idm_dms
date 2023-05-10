import UserContext from "@/contexts/UserContext";
import { initCarousels } from "flowbite";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import Announcements from "./Announcement";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children, active }) {
  const { user, userError, userLoading } = useContext(UserContext);
  const router = useRouter();

  useEffect(() => {
    console.log({ user, userError, userLoading });
    if (userLoading || !user) return;

    if (user?.LoginRole?.Role === "ADMIN") {
      router.push("/admin");
    }
  }, [user, userError, userLoading, router]);

  useEffect(() => {
    initCarousels();
  });

  return (
    <div>
      <Header />
      <Sidebar />
      <div className=' sm:ml-64'>
        <div className='p-2'>
          <div className='mt-16'>
            {user && <Announcements />}
            <div className="dark:bg-gray-900  bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
