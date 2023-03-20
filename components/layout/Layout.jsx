import useUser from "@/hooks/useUser";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children, active }) {
  const { user, userError, userLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    console.log({ user, userError, userLoading });
    if (userLoading || !user) return;

    if (user?.LoginRole?.Role === "ADMIN") {
      router.push("/admin");
    }
  }, [user, userError, userLoading]);

  return (
    <div>
      <Header />
      <Sidebar />
      <div className=' sm:ml-64'>
        <div className='p-2'>
          <div className=' mt-16'>
            <div className=''>
              <div className='flex flex-wrap items-center border border-slate-300  bg-CITLGray-light m-2 p-3 relative rounded-lg shadow-lg overflow-hidden'>
                <div className='px-6 py-4 md:w-10/12 sm:w-12/12'>
                  <h3 className='text-lg font-semibold text-CITLDarkBlue'>
                    Announcement
                  </h3>
                  <p className='text-gray-600 mt-2 pb-5'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quia facere natus eos amet dolor quam, sit, consequatur
                    rerum unde similique provident, eaque a perspiciatis
                    aspernatur ex odio sequi corrupti quae!
                  </p>
                  <Link
                    href={`/`}
                    className='inline-flex items-center px-4 py-2.5 text-sm font-medium text-CITLDarkBlue bg-CITLOrange border  rounded-lg  hover:text-CITLOrange hover:bg-transparent hover:border-CITLOrange focus:outline-none '
                  >
                    Read more{" "}
                    <svg
                      className='w-3 h-3 ml-2'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </Link>
                  {/* <button className="items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-CITLDarkBlue rounded-lg ">
              Read more
              <svg
                className="w-3 h-3 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button> */}
                </div>

                <img
                  className='md:w-2/12 sm:w-12/12 rounded-lg object-cover relative shadow-lg'
                  src='/IMAGES/DSC_6510.jpg'
                  alt='Announcement Image'
                />
              </div>
            </div>
            {children}
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
