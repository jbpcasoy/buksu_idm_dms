import Layout from "@/components/layout/Layout";
import useUser from "@/hooks/useUser";
import frontendGetIMs from "@/services/frontend/im/frontendGetIMs";
import IM from "@/views/im/IM";
import _ from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const Tabs = {
    MyIMs: "MyIMs",
    ToRevise: "ToRevise",
    ToReview: "ToReview",
    Reviewed: "Reviewed",
    DepartmentIMs: "DepartmentIMs",
  };

  const [ims, setIms] = useState([]);
  const [tab, setTab] = useState(Tabs.MyIMs);
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

    async function getToReview(filter) {
      return frontendGetIMs({
        notOwnerId: user.ActiveFaculty.Faculty.id,
        departmentId: user.ActiveFaculty.Faculty.departmentId,
        ...filter,
      });
    }

    async function getDepartmentIms(filter) {
      return frontendGetIMs({
        departmentId: user.ActiveFaculty.Faculty.departmentId,
        ...filter,
      });
    }

    async function getReviewed(filter) {
      return frontendGetIMs({
        reviewerId: user.id,
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

    let getter = getMyIMs;

    switch (tab) {
      case Tabs.MyIMs:
        getter = getMyIMs;
        break;
      case Tabs.ToReview:
        getter = getToReview;
        break;
      case Tabs.DepartmentIMs:
        getter = getDepartmentIms;
        break;
      case Tabs.Reviewed:
        getter = getReviewed;
        break;
      default:
        throw new Error("Tab unsupported");
    }

    getter(filter).then((res) => {
      setLoading(false);
      if (!subscribe) return;

      setIms(res.data);
      setTotal(res.total);
    });

    return () => {
      subscribe = false;
    };
  }, [
    user,
    state,
    tab,
    Tabs.DepartmentIMs,
    Tabs.MyIMs,
    Tabs.Reviewed,
    Tabs.ToReview,
  ]);

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
      <div className=''>
        <div className='flex flex-wrap items-center border border-slate-300  bg-CITLWhite m-2 p-3 relative rounded-lg shadow-lg overflow-hidden'>
          <div className='px-6 py-4 md:w-10/12 sm:w-12/12'>
            <h3 className='text-lg font-semibold text-CITLDarkBlue'>
              Announcement
            </h3>
            <p className='text-gray-600 mt-2 pb-5'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
              facere natus eos amet dolor quam, sit, consequatur rerum unde
              similique provident, eaque a perspiciatis aspernatur ex odio sequi
              corrupti quae!
            </p>
            <Link
              href={`/`}
              className='inline-flex items-center px-4 py-2 text-sm font-medium text-CITLDarkBlue bg-CITLOrange border  rounded-lg  hover:text-CITLDarkBlue hover:border-CITLOrange focus:outline-none '
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
      {!user?.ActiveFaculty && !userLoading && (
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
            alt='Announcement Image'
          />
        </div>
      )}
      {user?.ActiveFaculty && (
        <div className=' grid grid-flow-row items-center border border-CITLGray-lighter bg-CITLWhite m-2 mt-5 relative rounded-lg shadow-lg overflow-x-auto'>
          <div className=' bg-CITLGray-light py-3 px-3 pr-3'>
            <div className='w-full justify-between grid grid-flow-col auto-cols-max'>
              <div>
                {user?.ActiveFaculty && (
                  <>
                    <button
                      type='button'
                      onClick={() => setTab(Tabs.MyIMs)}
                      className={`inline-flex items-center px-2 py-2.5 text-sm font-medium text-center text-CITLDarkBlue rounded-none ${
                        tab === Tabs.MyIMs ? "border-b-2 border-CITLOrange" : ""
                      }`}
                    >
                      <span className='inline-flex items-center justify-center w-4 h-4 mr-1 text-xs font-semibold text-CITLWhite bg-CITLOrange rounded-full '>
                        2
                      </span>
                      <span>My IM&apos;s</span>
                    </button>
                    <button
                      type='button'
                      // onClick={() => setTab(Tabs.ToRevise)}
                      className={`line-through inline-flex items-center px-2 py-2.5 text-sm font-medium text-center text-CITLDarkBlue border-CITLOrange rounded-none ${
                        tab === Tabs.ToRevise
                          ? "border-b-2 border-CITLOrange"
                          : ""
                      }`}
                    >
                      <span className='inline-flex items-center justify-center w-4 h-4 mr-1 text-xs font-semibold text-CITLWhite bg-CITLOrange rounded-full'>
                        2
                      </span>
                      To Revise
                    </button>
                    <button
                      type='button'
                      onClick={() => setTab(Tabs.ToReview)}
                      className={`inline-flex items-center px-2 py-2.5 text-sm font-medium text-center text-CITLDarkBlue  border-CITLOrange rounded-none ${
                        tab === Tabs.ToReview
                          ? "border-b-2 border-CITLOrange"
                          : ""
                      }`}
                    >
                      <span className='inline-flex items-center justify-center w-4 h-4 mr-1 text-xs font-semibold text-CITLWhite bg-CITLOrange rounded-full'>
                        2
                      </span>
                      To Review
                    </button>
                    <button
                      type='button'
                      onClick={() => setTab(Tabs.Reviewed)}
                      className={`inline-flex items-center px-2 py-2.5 text-sm font-medium text-center text-CITLDarkBlue border-CITLOrange rounded-none ${
                        tab === Tabs.Reviewed
                          ? "border-b-2 border-CITLOrange"
                          : ""
                      }`}
                    >
                      <span className='inline-flex items-center justify-center w-4 h-4 mr-1 text-xs font-semibold text-CITLWhite bg-CITLOrange rounded-full'>
                        2
                      </span>
                      Reviewed
                    </button>
                  </>
                )}
                {(user?.ActiveFaculty?.ActiveCoordinator ||
                  user?.ActiveFaculty?.ActiveChairperson) && (
                  <button
                    type='button'
                    onClick={() => setTab(Tabs.DepartmentIMs)}
                    className={`inline-flex items-center px-2 py-2.5 text-sm font-medium text-center text-CITLDarkBlue border-CITLOrange rounded-none ${
                      tab === Tabs.DepartmentIMs
                        ? "border-b-2 border-CITLOrange"
                        : ""
                    }`}
                  >
                    <span className='inline-flex items-center justify-center w-4 h-4 mr-1 text-xs font-semibold text-CITLWhite bg-CITLOrange rounded-full'>
                      2
                    </span>
                    Department IM&apos;s
                  </button>
                )}
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
                    title='Add IM'
                    className='flex items-center bg-CITLDarkBlue rounded-lg px-4 py-2.5 text-sm font-medium text-center shadow-md text-white '
                    onClick={() => {
                      router.push("/im/new");
                    }}
                  >
                    <i className='fi fi-br-plus mt-1  '></i>
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
                  Title
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Type
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Owner
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Status
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Review Status
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Reviewed As
                </th>

                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Created At
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
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-gray-200 overflow-y-auto'>
              {ims.map((im, index) => {
                return (
                  <IM
                    // bottomBorder={index < state.ims.length - 1}
                    im={im}
                    peerReviewed={Boolean(im.SubmittedPeerReview)}
                    chairpersonReviewed={Boolean(im.SubmittedChairpersonReview)}
                    coordinatorReviewed={Boolean(im.SubmittedCoordinatorReview)}
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
