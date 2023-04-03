import UserContext from "@/contexts/UserContext";
import useSidebarCounts from "@/hooks/count/useSidebarCounts";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function Sidebar() {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const {
    myImsCount,
    toReviseCount,
    toReviewCount,
    reviewedCount,
    departmentImsCount,
    toEndorseCount,
    endorsedCount,
    toConfirmCount,
    confirmedCount,
    collegeIMsCount,
    cITLToReviewCount,
    cITLReviewedCount,
  } = useSidebarCounts();

  return (
    <aside
      id='logo-sidebar'
      className='fixed top-0 left-0 z-10 w-64 h-screen pt-20 transition-transform -translate-x-full bg-CITLDarkBlue border-r border-gray-200 sm:translate-x-0  dark:bg-gray-800 dark:border-gray-700'
      aria-label='Sidebar'
    >
      <div className='flex flex-col justify-between h-full px-3 pb-4 overflow-y-auto bg-CITLDarkBlue dark:bg-gray-800'>
        <ul className='space-y-2'>
          <li>
            <Link
              href='/home'
              className={`flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg  hover:bg-CITLGray-main ${
                router.asPath === "/home" ? "bg-CITLGray-main" : ""
              }`}
            >
              <svg
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                className='flex-shrink-0 w-6 h-6 text-CITLWhite transition duration-75 group-hover:text-CITLGray-main'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
                ></path>
              </svg>
              <div className='justify-between flex w-full items-center'>
                <span className='ml-3'>Home</span>
              </div>
            </Link>
          </li>

          <li>
            <Link
              href='/college'
              className={`flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg  hover:bg-CITLGray-main ${
                router.asPath === "/college" ? "bg-CITLGray-main" : ""
              }`}
            >
              <svg
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'
                className='flex-shrink-0 w-6 h-6 text-CITLWhite transition duration-75 group-hover:text-CITLGray-main'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z'
                ></path>
              </svg>
              <span className='flex-1 ml-3 whitespace-nowrap'>Colleges</span>
            </Link>
          </li>

          {user?.IMDCoordinator?.ActiveIMDCoordinator && (
            <>
              <hr className='h-px my-8 w-56 bg-CITLGray-main border-0 dark:bg-gray-700' />
              <div className='text-sm text-center w-full text-white'>
                UNIVERSITY
                <br />
                IMD COORDINATOR
              </div>
              <li>
                <Link
                  href='/imd_coordinator/to_review'
                  className={`flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg hover:bg-CITLGray-main ${
                    router.asPath === "/imd_coordinator/to_review"
                      ? "bg-CITLGray-main"
                      : ""
                  }`}
                >
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    className='flex-shrink-0 w-6 h-6 text-CITLWhite transition duration-75 group-hover:text-CITLGray-main'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                    ></path>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    ></path>
                  </svg>
                  <div className='justify-between flex w-full items-center'>
                    <span className='ml-3'>To Review</span>
                    {cITLToReviewCount > 0 && (
                      <div className='inline-flex items-center justify-center w-4 h-4  text-xs font-semibold text-CITLOrange '>
                        {cITLToReviewCount}
                      </div>
                    )}
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  href='/imd_coordinator/reviewed'
                  className={`flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg  hover:bg-CITLGray-main ${
                    router.asPath === "/imd_coordinator/reviewed"
                      ? "bg-CITLGray-main"
                      : ""
                  }`}
                >
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    className='flex-shrink-0 w-6 h-6 text-CITLWhite transition duration-75 group-hover:text-CITLGray-main'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'
                    ></path>
                  </svg>
                  <div className='justify-between flex w-full items-center'>
                    <span className='ml-3'>Reviewed</span>
                    {cITLReviewedCount > 0 && (
                      <div className='inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-CITLOrange '>
                        {cITLReviewedCount}
                      </div>
                    )}
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  href='#'
                  // href='/to_endorse'
                  className={`flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg  hover:bg-CITLGray-main ${
                    router.asPath === "/to_endorse" ? "bg-CITLGray-main" : ""
                  }`}
                >
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    className='flex-shrink-0 w-6 h-6 text-CITLWhite transition duration-75 group-hover:text-CITLGray-main'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z'
                    ></path>
                  </svg>
                  <div className='justify-between flex w-full items-center'>
                    <span className='flex-1 ml-3 whitespace-nowrap'>
                      To Endorse
                    </span>
                    {/* {toEndorseCount > 0 && ( */}
                    <div className='inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-CITLOrange '>
                      {/* {toEndorseCount} */} NaN
                    </div>
                    {/* )} */}
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  // href='/endorsed'
                  className={`flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg  hover:bg-CITLGray-main ${
                    router.asPath === "/endorsed" ? "bg-CITLGray-main" : ""
                  }`}
                >
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    className='flex-shrink-0 w-6 h-6 text-CITLWhite transition duration-75 group-hover:text-CITLGray-main'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'
                    />
                  </svg>

                  <div className='justify-between flex w-full items-center'>
                    <span className='flex-1 ml-3 whitespace-nowrap'>
                      Endorsed
                    </span>
                    {/* {endorsedCount > 0 && ( */}
                    <div className='inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-CITLOrange '>
                      {/* {endorsedCount} */} NaN
                    </div>
                    {/* )} */}
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  href='#'
                  // href='/department_ims'
                  className={`flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg  hover:bg-CITLGray-main ${
                    router.asPath === "/department_ims"
                      ? "bg-CITLGray-main"
                      : ""
                  }`}
                >
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    className='flex-shrink-0 w-6 h-6 text-CITLWhite transition duration-75 group-hover:text-CITLGray-main'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21'
                    ></path>
                  </svg>
                  <div className='justify-between flex w-full items-center'>
                    <span className='flex-1 ml-3 whitespace-nowrap'>
                      IM&apos;s
                    </span>
                    {/* {departmentImsCount > 0 && ( */}
                    <div className='inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-CITLOrange '>
                      {/* {departmentImsCount} */} NaN
                    </div>
                    {/* )} */}
                  </div>
                </Link>
              </li>
            </>
          )}

          {user?.ActiveFaculty && (
            <>
              <hr className='h-px my-8 w-56 bg-CITLGray-main border-0 dark:bg-gray-700' />
              <div className='text-sm text-center w-full text-white'>
                DEPARTMENT
              </div>
              <li>
                <Link
                  href='/my_ims'
                  className={`flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg  hover:bg-CITLGray-main ${
                    router.asPath === "/my_ims" ? "bg-CITLGray-main" : ""
                  }`}
                >
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    className='flex-shrink-0 w-6 h-6 text-CITLWhite transition duration-75 group-hover:text-CITLGray-main'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z'
                    ></path>
                  </svg>
                  <div className='justify-between flex w-full items-center'>
                    <span className='ml-3'>My IM&apos;s</span>
                    {myImsCount > 0 && (
                      <div className='inline-flex items-center justify-center w-4 h-4  text-xs font-semibold text-CITLOrange '>
                        {myImsCount}
                      </div>
                    )}
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  href='/to_revise'
                  className={`flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg  hover:bg-CITLGray-main ${
                    router.asPath === "/to_revise" ? "bg-CITLGray-main" : ""
                  }`}
                >
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    className='flex-shrink-0 w-6 h-6 text-CITLWhite transition duration-75 group-hover:text-CITLGray-main'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3'
                    ></path>
                  </svg>
                  <div className='justify-between flex w-full items-center'>
                    <span className='ml-3'>To Revise</span>
                    {toReviseCount > 0 && (
                      <div className='inline-flex items-center justify-center w-4 h-4  text-xs font-semibold text-CITLOrange '>
                        {toReviseCount}
                      </div>
                    )}
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  href='/to_review'
                  className={`flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg hover:bg-CITLGray-main ${
                    router.asPath === "/to_review" ? "bg-CITLGray-main" : ""
                  }`}
                >
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    className='flex-shrink-0 w-6 h-6 text-CITLWhite transition duration-75 group-hover:text-CITLGray-main'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                    ></path>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    ></path>
                  </svg>
                  <div className='justify-between flex w-full items-center'>
                    <span className='ml-3'>To Review</span>
                    {toReviewCount > 0 && (
                      <div className='inline-flex items-center justify-center w-4 h-4  text-xs font-semibold text-CITLOrange '>
                        {toReviewCount}
                      </div>
                    )}
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  href='/reviewed'
                  className={`flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg  hover:bg-CITLGray-main ${
                    router.asPath === "/reviewed" ? "bg-CITLGray-main" : ""
                  }`}
                >
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    className='flex-shrink-0 w-6 h-6 text-CITLWhite transition duration-75 group-hover:text-CITLGray-main'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'
                    ></path>
                  </svg>
                  <div className='justify-between flex w-full items-center'>
                    <span className='ml-3'>Reviewed</span>
                    {reviewedCount > 0 && (
                      <div className='inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-CITLOrange '>
                        {reviewedCount}
                      </div>
                    )}
                  </div>
                </Link>
              </li>

              {user?.ActiveFaculty?.ActiveCoordinator && (
                <>
                  <li>
                    <Link
                      href='/to_endorse'
                      className={`flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg  hover:bg-CITLGray-main ${
                        router.asPath === "/to_endorse"
                          ? "bg-CITLGray-main"
                          : ""
                      }`}
                    >
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        className='flex-shrink-0 w-6 h-6 text-CITLWhite transition duration-75 group-hover:text-CITLGray-main'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z'
                        ></path>
                      </svg>
                      <div className='justify-between flex w-full items-center'>
                        <span className='flex-1 ml-3 whitespace-nowrap'>
                          To Endorse
                        </span>
                        {toEndorseCount > 0 && (
                          <div className='inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-CITLOrange '>
                            {toEndorseCount}
                          </div>
                        )}
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href='/endorsed'
                      className={`flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg  hover:bg-CITLGray-main ${
                        router.asPath === "/endorsed" ? "bg-CITLGray-main" : ""
                      }`}
                    >
                      <svg
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='1.5'
                        className='flex-shrink-0 w-6 h-6 text-CITLWhite transition duration-75 group-hover:text-CITLGray-main'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'
                        />
                      </svg>

                      <div className='justify-between flex w-full items-center'>
                        <span className='flex-1 ml-3 whitespace-nowrap'>
                          Endorsed
                        </span>
                        {endorsedCount > 0 && (
                          <div className='inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-CITLOrange '>
                            {endorsedCount}
                          </div>
                        )}
                      </div>
                    </Link>
                  </li>
                </>
              )}

              {(user?.ActiveFaculty?.ActiveChairperson ||
                user?.ActiveFaculty?.ActiveCoordinator) && (
                <li>
                  <Link
                    href='/department_ims'
                    className={`flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg  hover:bg-CITLGray-main ${
                      router.asPath === "/department_ims"
                        ? "bg-CITLGray-main"
                        : ""
                    }`}
                  >
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      className='flex-shrink-0 w-6 h-6 text-CITLWhite transition duration-75 group-hover:text-CITLGray-main'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21'
                      ></path>
                    </svg>
                    <div className='justify-between flex w-full items-center'>
                      <span className='flex-1 ml-3 whitespace-nowrap'>
                        Department IM&apos;s
                      </span>
                      {departmentImsCount > 0 && (
                        <div className='inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-CITLOrange '>
                          {departmentImsCount}
                        </div>
                      )}
                    </div>
                  </Link>
                </li>
              )}
            </>
          )}
          {user?.ActiveFaculty?.ActiveDean && (
            <>
              <hr className='h-px my-8 w-56 bg-CITLGray-main border-0 dark:bg-gray-700' />
              <div className='text-sm text-center w-full text-white'>
                COLLEGE
              </div>

              <li>
                <Link
                  href='/to_confirm_endorsement'
                  className={`flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg  hover:bg-CITLGray-main ${
                    router.asPath === "/to_confirm_endorsement"
                      ? "bg-CITLGray-main"
                      : ""
                  }`}
                >
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    className='flex-shrink-0 w-6 h-6 text-CITLWhite transition duration-75 group-hover:text-CITLGray-main'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z'
                    ></path>
                  </svg>
                  <div className='justify-between flex w-full items-center'>
                    <span className='flex-1 ml-3 whitespace-nowrap'>
                      To Confirm
                    </span>
                    {toConfirmCount > 0 && (
                      <div className='inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-CITLOrange '>
                        {toConfirmCount}
                      </div>
                    )}
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href='/confirmed_endorsement'
                  className={`flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg  hover:bg-CITLGray-main ${
                    router.asPath === "/confirmed_endorsement"
                      ? "bg-CITLGray-main"
                      : ""
                  }`}
                >
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    className='flex-shrink-0 w-6 h-6 text-CITLWhite transition duration-75 group-hover:text-CITLGray-main'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z'
                    />
                  </svg>

                  <div className='justify-between flex w-full items-center'>
                    <span className='flex-1 ml-3 whitespace-nowrap'>
                      Confirmed
                    </span>
                    {confirmedCount > 0 && (
                      <div className='inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-CITLOrange '>
                        {confirmedCount}
                      </div>
                    )}
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href='/college_ims'
                  className={`flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg  hover:bg-CITLGray-main ${
                    router.asPath === "/college_ims" ? "bg-CITLGray-main" : ""
                  }`}
                >
                  <svg
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    className='flex-shrink-0 w-6 h-6 text-CITLWhite transition duration-75 group-hover:text-CITLGray-main'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                    aria-hidden='true'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z'
                    />
                  </svg>

                  <div className='justify-between flex w-full items-center'>
                    <span className='flex-1 ml-3 whitespace-nowrap'>
                      College IM&apos;s
                    </span>
                    {collegeIMsCount > 0 && (
                      <div className='inline-flex items-center justify-center w-4 h-4 text-xs font-semibold text-CITLOrange '>
                        {collegeIMsCount}
                      </div>
                    )}
                  </div>
                </Link>
              </li>
            </>
          )}
        </ul>
        <div className=''>
          <hr className='h-px my-4 w-56 bg-CITLGray-main border-0 dark:bg-gray-700' />
          <p className='text-xs text-CITLGray-main tracking-tight '>
            Bukidnon State University
          </p>
          <p className='text-xs text-CITLGray-main tracking-tighter '>
            Center for Innovative Teaching and Learning
          </p>
          <div className='my-4 '>
            <ul className='mt-2 flex justify-center gap-6 md:gap-8'>
              <li>
                <Link
                  href='https://m.me/110429694111266'
                  rel='noreferrer'
                  target='_blank'
                  className='text-CITLGray-main transition hover:text-gray-700/75'
                  title='Facebook'
                >
                  <span className='sr-only'>Messenger</span>

                  <svg
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                      clipRule='evenodd'
                    />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href='/'
                  rel='noreferrer'
                  target='_blank'
                  className='text-CITLGray-main transition hover:text-gray-700/75'
                >
                  <span className='sr-only'>Telephone</span>
                  <svg
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                      clipRule='evenodd'
                    />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href='/'
                  rel='noreferrer'
                  target='_blank'
                  className='text-CITLGray-main transition hover:text-gray-700/75'
                >
                  <span className='sr-only'>Website</span>
                  <svg
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>

    // <div className='flex flex-row min-h-screen'>
    //   <div className='bg-CITLDarkBlue text-gray-100 flex flex-col justify-between w-64'>
    //     <div className='flex flex-col  font font-semibold'>
    //       <Link
    //         href='/'
    //         className={`px-4 py-2 hover:bg-gray-700 ${
    //           active === "myIMs" ? "bg-white text-gray-900" : ""
    //         }`}>
    //         My IMs
    //       </Link>
    //       <Link
    //         href='/college'
    //         className={`px-4 py-2 hover:bg-gray-700 ${
    //           active === "colleges" ? "bg-white text-gray-900" : ""
    //         }`}>
    //         Colleges
    //       </Link>

    //       <Link href='#' className='px-4 py-2 hover:bg-gray-700'>
    //         Contact
    //       </Link>
    //     </div>
    //     <div className='px-4 pb-5 '>
    //       <Link href='#' className='text-sm hover:text-gray-500'>
    //         Privacy Policy
    //       </Link>
    //       <Link href='#' className='text-sm hover:text-gray-500'>
    //         Terms of Service
    //       </Link>
    //     </div>
    //   </div>
    //   <div className='flex-1 flex flex-col'>
    //     {/* <h1 className="text-2xl font-bold">Content Area</h1> */}
    //     {children}
    //   </div>
    // </div>
  );
}
