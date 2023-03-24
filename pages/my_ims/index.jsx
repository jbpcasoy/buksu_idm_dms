import Layout from "@/components/layout/Layout";
import useUser from "@/hooks/useUser";
import frontendGetIMs from "@/services/frontend/im/frontendGetIMs";
import IM from "@/views/im/IM";
import _ from "lodash";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [ims, setIms] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState({
    page: 1,
    limit: 10,
    serialNumber: "",
    title: "",
    status: undefined,
  });

  const { user, userLoading, userError } = useUser();

  useEffect(() => {
    console.log({ user });
  }, [user]);

  const router = useRouter();

  useEffect(() => {
    if (!user || !user?.ActiveFaculty) return;
    let subscribe = true;
    setLoading(true);

    async function getMyIMs(filter) {
      return frontendGetIMs({
        ownerId: user.ActiveFaculty.Faculty.id,
        ...filter,
      });
    }

    const filter = {
      page: state.page,
      limit: state.limit,
      serialNumber: state.serialNumber,
      title: state.title,
      status: state.status,
    };

    getMyIMs(filter).then((res) => {
      setLoading(false);
      if (!subscribe) return;

      setIms(res.data);
      setTotal(res.total);
    });

    return () => {
      subscribe = false;
    };
  }, [user, state]);

  function handleSerialNumberChange(e) {
    setState((prev) => ({ ...prev, serialNumber: e.target.value }));
  }
  const debouncedHandleSerialNumberChange = _.debounce(
    handleSerialNumberChange,
    800
  );

  function handleTitleChange(e) {
    setState((prev) => ({ ...prev, title: e.target.value }));
  }
  const debouncedHandleTitleChange = _.debounce(handleTitleChange, 800);

  function handleStatusChange(e) {
    setState((prev) => ({
      ...prev,
      status: e.target.value === "" ? undefined : e.target.value,
    }));
  }
  const debouncedHandleStatusChange = _.debounce(handleStatusChange, 800);

  return (
    <Layout>
      {user && !user?.ActiveFaculty && !userLoading && (
        <div className=' flex-wrap grid text-center justify-items-center  border min-h-fit border-slate-300  bg-CITLWhite m-2 p-3 rounded-lg shadow-lg overflow-hidden'>
          <div className='px-6 py-4 md:w-10/12 sm:w-12/12'>
            <h3 className='text-3xl font-bold text-CITLDarkBlue'>
              Unauthorized
            </h3>
            <p className='text-gray-600 mt-2 pb-5'>
              You are currently not an active faculty, please contact
              administrator.
            </p>
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
            className=' md:w-2/12 sm:w-12/12 rounded-lg '
            src='/IMAGES/undraw_personal_information_re_vw8a.svg'
            alt='Unauthorized'
          />
        </div>
      )}
      {user?.ActiveFaculty && (
        <div className=' grid grid-flow-row items-center border border-CITLGray-lighter bg-CITLWhite m-2 mt-5 relative rounded-lg shadow-lg overflow-x-auto'>
          <div className=' bg-CITLGray-light py-3 px-3 pr-3'>
            <div className='w-full justify-between grid grid-flow-col auto-cols-max'>
              <div>
                <button
                  type='button'
                  className={`inline-flex items-center px-2 py-2.5 text-sm font-medium text-center text-CITLDarkBlue rounded-none border-b-2 border-CITLOrange`}
                >
                  <div className='inline-flex items-center justify-center w-4 h-4 mr-1 text-xs font-semibold text-CITLWhite bg-CITLOrange rounded-full '>
                    {total}
                  </div>
                  <span>My IM&apos;s</span>
                </button>
              </div>
              <div className=' grid grid-flow-col auto-cols-max gap-2 px-2 '>
                {/* <input
                  onChange={debouncedHandleSerialNumberChange}
                  className='bg-CITLGray-light w-32 border-CITLGray-lighter border text-CITLGray-main rounded-lg text-sm font-medium'
                  type='text'
                  placeholder='Serial Number'
                ></input> */}
                <input
                  onChange={debouncedHandleTitleChange}
                  className='bg-CITLGray-light w-64 border-CITLGray-lighter border text-CITLGray-main rounded-lg text-sm font-medium'
                  type='text'
                  placeholder='Title'
                ></input>
                <select
                  id='default'
                  className='bg-CITLGray-light border-CITLGray-lighter border text-CITLGray-main rounded-lg text-sm font-medium'
                  onChange={debouncedHandleStatusChange}
                >
                  <option value='' selected>
                    Status
                  </option>
                  <option value='SUBMITTED'>Submitted</option>
                  <option value='DEPARTMENT_REVIEWED'>
                    Department Reviewed
                  </option>
                  <option value='DEPARTMENT_ENDORSED'>
                    Department Endorsed
                  </option>
                  <option value='CITL_REVIEWED'>CITL Reviewed</option>
                  <option value='CITL_ENDORSED'>CITL Endorsed</option>
                </select>
                <div className=''>
                  <button
                    data-modal-target='suggestion-modal'
                    data-modal-toggle='suggestion-modal'
                    className='flex gap-2 text-sm font-medium text-center px-4 py-2.5 text-CITLWhite  bg-CITLDarkBlue rounded-lg hover:bg-transparent hover:border-CITLDarkBlue border hover:text-CITLDarkBlue'
                    type='button'
                    onClick={() => {
                      router.push("/im/new");
                    }}
                  >
                    <svg
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      className='w-5 h-5'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 6v12m6-6H6'
                      ></path>
                    </svg>
                    Add IM
                  </button>
                </div>
              </div>{" "}
            </div>
          </div>

          <table className='divide-y divide-CITLGray-light mb-2'>
            <thead className='bg-CITLGray-light'>
              <tr>
                {/* <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Serial No.
                </th> */}
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Title{" "}
                  <a href='#'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='w-2 h-3 inline-flex ml-1'
                      aria-hidden='true'
                      fill='currentColor'
                      viewBox='0 0 320 512'
                    >
                      <path d='M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z' />
                    </svg>
                  </a>
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Type
                  <a href='#'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='w-2 h-3 inline-flex ml-1'
                      aria-hidden='true'
                      fill='currentColor'
                      viewBox='0 0 320 512'
                    >
                      <path d='M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z' />
                    </svg>
                  </a>
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Authors
                </th>
                {/* <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Owner
                  <a href='#'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='w-2 h-3 inline-flex ml-1'
                      aria-hidden='true'
                      fill='currentColor'
                      viewBox='0 0 320 512'
                    >
                      <path d='M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z' />
                    </svg>
                  </a>
                </th> */}
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Status
                  <a href='#'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='w-2 h-3 inline-flex ml-1'
                      aria-hidden='true'
                      fill='currentColor'
                      viewBox='0 0 320 512'
                    >
                      <path d='M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z' />
                    </svg>
                  </a>
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Review Status
                  <a href='#'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='w-3 h-3 inline-flex ml-1'
                      aria-hidden='true'
                      fill='currentColor'
                      viewBox='0 0 320 512'
                    >
                      <path d='M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z' />
                    </svg>
                  </a>
                </th>
                {/* 
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Reviewed As
                  <a href='#'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='w-2 h-3 inline-flex ml-1'
                      aria-hidden='true'
                      fill='currentColor'
                      viewBox='0 0 320 512'
                    >
                      <path d='M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z' />
                    </svg>
                  </a>
                </th> */}

                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Created At
                  <a href='#'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='w-2 h-3 inline-flex ml-1'
                      aria-hidden='true'
                      fill='currentColor'
                      viewBox='0 0 320 512'
                    >
                      <path d='M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z' />
                    </svg>
                  </a>
                </th>
                {/* <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Updated At
                </th> */}
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Serial No.
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-gray-200 overflow-y-auto'>
              {loading && (
                <tr
                  className={` bg-white text-sm text-CITLGray-main text-left p-4 animate-pulse `}
                >
                  <td className='px-6 py-4  '>
                    <div class='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                    <div class='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
                  </td>

                  <td className='px-6 py-4 '>
                    <div class='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                  </td>

                  <td className='px-6 py-4 '>
                    <div class='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                  </td>

                  <td className='px-6 py-4 '>
                    <div class='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                  </td>
                  <td className='px-4 py-4 space-x-1'>
                    <div class='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                  </td>

                  <td className='px-6 py-4 '>
                    <div class='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                  </td>

                  <td className='px-6 py-4 '>
                    <div class='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                  </td>

                  <td className='px-6 py-4 '>
                    <div class='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                  </td>
                </tr>
              )}
              {!loading &&
                ims.map((im, index) => {
                  return (
                    <IM
                      authors={im.authors}
                      showSerialNumber={true}
                      // bottomBorder={index < state.ims.length - 1}
                      im={im}
                      peerReviewed={Boolean(
                        im.SubmittedPeerReview && im.SubmittedPeerSuggestion
                      )}
                      chairpersonReviewed={Boolean(
                        im.SubmittedChairpersonReview &&
                          im.SubmittedChairpersonSuggestion
                      )}
                      coordinatorReviewed={Boolean(
                        im.SubmittedCoordinatorReview &&
                          im.SubmittedCoordinatorSuggestion
                      )}
                      bottomBorder={true}
                      createdAt={im.createdAt}
                      originalFileName={im.originalFileName}
                      fileName={im.fileName}
                      id={im.id}
                      serialNumber={im.serialNumber}
                      status={im.status}
                      title={im.title}
                      updatedAt={im.updatedAt}
                      onView={() => router.push(`/im/${im.id}`)}
                      owner={im.owner.user.name}
                      type={im.type}
                      key={im.id}
                    />
                  );
                })}
            </tbody>
          </table>

          <div className='flex flex-row items-center justify-end px-6 py-3 w-full'>
            {!loading && (
              <span className='text-sm text-gray-700 dark:text-gray-400 '>
                Showing{" "}
                <span className='font-semibold text-gray-900 dark:text-white'>
                  {state.limit * (state.page - 1) + 1 > total
                    ? 0
                    : state.limit * (state.page - 1) + 1}
                </span>
                {" - "}
                <span className='font-semibold text-gray-900 dark:text-white'>
                  {state.limit * state.page > total
                    ? total
                    : state.limit * state.page}
                </span>{" "}
                of{" "}
                <span className='font-semibold text-gray-900 dark:text-white'>
                  {total}
                </span>{" "}
                Entries
              </span>
            )}
            {loading && (
              <span className='text-sm text-gray-700 dark:text-gray-400 '>
                Loading...
              </span>
            )}
            <div className='inline-flex xs:mt-0 ml-2 gap-x-1'>
              <button
                className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:bg-CITLGray-main'
                disabled={state.page <= 1 || loading}
                onClick={() => {
                  setState((prev) => ({ ...prev, page: prev.page - 1 }));
                }}
              >
                <svg
                  aria-hidden='true'
                  className='w-5 h-5 mr-2'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
                Prev
              </button>
              <button
                className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0  rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:bg-CITLGray-main'
                disabled={!(state.page * state.limit < total) || loading}
                onClick={() => {
                  setState((prev) => ({ ...prev, page: prev.page + 1 }));
                }}
              >
                Next
                <svg
                  aria-hidden='true'
                  className='w-5 h-5 ml-2'
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
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
