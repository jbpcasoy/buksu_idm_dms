import UserContext from "@/contexts/UserContext";
import useSidebarCounts from "@/hooks/count/useSidebarCounts";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

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
    imsCount,
    cITLToEndorseCount,
    cITLEndorsedCount,
    cITLToConfirmCount,
    cITLConfirmedCount,
  } = useSidebarCounts();

  useEffect(() => {
    console.log({ cITLEndorsedCount });
  }, [cITLEndorsedCount]);

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
                  strokeLinecap='round'
                  strokeLinejoin='round'
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

          {user?.ActiveFaculty && (
            <>
              <hr className='h-px my-8 w-56 bg-CITLGray-main border-0 dark:bg-gray-700' />
              <div className='text-sm w-full text-white'>DEPARTMENT</div>
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
                      <div className='inline-flex items-center justify-center px-1  bg-CITLOrange rounded-full text-xs font-semibold text-CITLDarkBlue '>
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
                      <div className='inline-flex items-center justify-center px-1  bg-CITLOrange rounded-full text-xs font-semibold text-CITLDarkBlue '>
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
                      <div className='inline-flex items-center justify-center px-1  bg-CITLOrange rounded-full text-xs font-semibold text-CITLDarkBlue '>
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
                      <div className='inline-flex items-center justify-center px-1  bg-CITLOrange rounded-full text-xs font-semibold text-CITLDarkBlue '>
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
                          <div className='inline-flex items-center justify-center px-1  bg-CITLOrange rounded-full text-xs font-semibold text-CITLDarkBlue '>
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
                          <div className='inline-flex items-center justify-center px-1  bg-CITLOrange rounded-full text-xs font-semibold text-CITLDarkBlue '>
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
                        <div className='inline-flex items-center justify-center px-1  bg-CITLOrange rounded-full text-xs font-semibold text-CITLDarkBlue '>
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
              <div className='text-sm w-full text-white'>COLLEGE</div>

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
                      <div className='inline-flex items-center justify-center px-1  bg-CITLOrange rounded-full text-xs font-semibold text-CITLDarkBlue '>
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
                      <div className='inline-flex items-center justify-center px-1  bg-CITLOrange rounded-full text-xs font-semibold text-CITLDarkBlue '>
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
                      <div className='inline-flex items-center justify-center px-1  bg-CITLOrange rounded-full text-xs font-semibold text-CITLDarkBlue '>
                        {collegeIMsCount}
                      </div>
                    )}
                  </div>
                </Link>
              </li>
            </>
          )}

          {user?.IMDCoordinator?.ActiveIMDCoordinator && (
            <>
              <hr className='h-px my-8 w-56 bg-CITLGray-main border-0 dark:bg-gray-700' />
              <div className='text-sm  w-full text-white'>IMD COORDINATOR</div>
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
                      <div className='inline-flex items-center justify-center px-1  bg-CITLOrange rounded-full text-xs font-semibold text-CITLDarkBlue '>
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
                      <div className='inline-flex items-center justify-center px-1  bg-CITLOrange rounded-full text-xs font-semibold text-CITLDarkBlue '>
                        {cITLReviewedCount}
                      </div>
                    )}
                  </div>
                </Link>
              </li>

              <li>
                <Link
                  href='/imd_coordinator/to_endorse'
                  className={`flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg  hover:bg-CITLGray-main ${
                    router.asPath === "/imd_coordinator/to_endorse"
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
                    {cITLToEndorseCount > 0 && (
                      <div className='inline-flex items-center justify-center px-1  bg-CITLOrange rounded-full text-xs font-semibold text-CITLDarkBlue '>
                        {cITLToEndorseCount}
                      </div>
                    )}
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href='/imd_coordinator/endorsed'
                  className={`flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg  hover:bg-CITLGray-main ${
                    router.asPath === "/imd_coordinator/endorsed"
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
                      Endorsed
                    </span>
                    {cITLEndorsedCount > 0 && (
                      <div className='inline-flex items-center justify-center px-1  bg-CITLOrange rounded-full text-xs font-semibold text-CITLDarkBlue '>
                        {cITLEndorsedCount}
                      </div>
                    )}
                  </div>
                </Link>
              </li>
            </>
          )}

          {user?.CITLDirector?.ActiveCITLDirector && (
            <>
              <hr className='h-px my-8 w-56 bg-CITLGray-main border-0 dark:bg-gray-700' />
              <div className='text-sm  w-full text-white'>CITL DIRECTOR</div>

              <li>
                <Link
                  href='/citl_director/to_endorse'
                  className={`flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg  hover:bg-CITLGray-main ${
                    router.asPath === "/citl_director/to_endorse"
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
                    {cITLToConfirmCount > 0 && (
                      <div className='inline-flex items-center justify-center px-1  bg-CITLOrange rounded-full text-xs font-semibold text-CITLDarkBlue '>
                        {cITLToConfirmCount}
                      </div>
                    )}
                  </div>
                </Link>
              </li>
              <li>
                <Link
                  href='/citl_director/endorsed'
                  className={`flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg  hover:bg-CITLGray-main ${
                    router.asPath === "/citl_director/endorsed"
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
                      Endorsed
                    </span>
                    {cITLConfirmedCount > 0 && (
                      <div className='inline-flex items-center justify-center px-1  bg-CITLOrange rounded-full text-xs font-semibold text-CITLDarkBlue '>
                        {cITLConfirmedCount}
                      </div>
                    )}
                  </div>
                </Link>
              </li>
            </>
          )}

          {(user?.CITLDirector?.ActiveCITLDirector ||
            user?.IMDCoordinator?.ActiveIMDCoordinator) && (
            <li>
              <Link
                href='/ims'
                className={`flex items-center p-2 text-base font-normal text-CITLWhite rounded-lg  hover:bg-CITLGray-main ${
                  router.asPath === "/ims" ? "bg-CITLGray-main" : ""
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
                  {imsCount > 0 && (
                    <div className='inline-flex items-center justify-center px-1  bg-CITLOrange rounded-full text-xs font-semibold text-CITLDarkBlue '>
                      {imsCount}
                    </div>
                  )}
                </div>
              </Link>
            </li>
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
                  title='Messenger'
                >
                  <span className='sr-only'>Messenger</span>

                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      d='M5.7 18.4V22L9 20.1c.9.3 1.9.4 3 .4 5.5 0 10-4.1 10-9.3C22 6.1 17.5 2 12 2S2 6.1 2 11.3c0 2.9 1.4 5.4 3.7 7.1Z'
                      stroke='#717883'
                      stroke-width='1.5'
                      stroke-miterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></path>
                    <path
                      d='m11.3 9.2-3.8 4.5 3.7-.9 1.5.9 3.8-4.5-3.5.9-1.7-.9Z'
                      stroke='#717883'
                      stroke-width='1.5'
                      stroke-miterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></path>
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href='https://buksu.edu.ph/'
                  rel='noreferrer'
                  target='_blank'
                  className='text-CITLGray-main transition hover:text-gray-700/75'
                  title='Website'
                >
                  <span className='sr-only'>Website</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      d='M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z'
                      stroke='#717883'
                      stroke-width='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></path>
                    <path
                      d='M8 3h1a28.424 28.424 0 0 0 0 18H8M15 3a28.424 28.424 0 0 1 0 18'
                      stroke='#717883'
                      stroke-width='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></path>
                    <path
                      d='M3 16v-1a28.424 28.424 0 0 0 18 0v1M3 9a28.424 28.424 0 0 1 18 0'
                      stroke='#717883'
                      stroke-width='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></path>
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href='/'
                  rel='noreferrer'
                  target='_blank'
                  className='text-CITLGray-main transition hover:text-gray-700/75'
                  title='Local 139'
                >
                  <span className='sr-only'>Local</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      d='M21.97 18.33c0 .36-.08.73-.25 1.09-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.6.25-1.25.38-1.95.38-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98a28.75 28.75 0 0 1-3.28-2.8 28.414 28.414 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.54.53 1.06 1.02 1.59 1.47.52.44.95.74 1.29.92.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78Z'
                      stroke='#717883'
                      stroke-width='1.5'
                      stroke-miterlimit='10'
                    ></path>
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
