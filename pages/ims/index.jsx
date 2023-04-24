import Filter from "@/components/Filter";
import Layout from "@/components/layout/Layout";
import SortButton from "@/components/SortButton";
import UserContext from "@/contexts/UserContext";
import IMStatuses from "@/services/constants/im_status";
import frontendGetIMs from "@/services/frontend/im/frontendGetIMs";
import IM from "@/views/im/IM";
import _ from "lodash";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

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
    sortColumn: "title",
    sortOrder: "asc",
  });

  const { user, userLoading, userError } = useContext(UserContext);

  useEffect(() => {
    console.log({ user });
  }, [user]);

  const router = useRouter();

  useEffect(() => {
    if (!user || !user?.ActiveFaculty) return;
    let subscribe = true;
    setLoading(true);

    async function getIms(filter) {
      return frontendGetIMs({
        ...filter,
      });
    }

    const filter = {
      ...state,
      page: state.page,
      limit: state.limit,
      sortColumn: state.sortColumn,
      sortOrder: state.sortOrder,
    };

    getIms(filter).then((res) => {
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
            <div className='w-full  grid grid-flow-col '>
              <div>
                <button
                  type='button'
                  className={`inline-flex items-center mr-3 px-2 py-2.5 text-sm font-medium text-center text-CITLDarkBlue border-CITLOrange rounded-none border-b-2`}
                >
                  <span className='inline-flex items-center justify-center px-1 mr-1 bg-CITLOrange rounded-full text-xs font-semibold text-CITLWhite '>
                    {total}
                  </span>
                  IM&apos;s
                </button>
              </div>
              <Filter
                filterOptions={[
                  {
                    value: "title",
                    label: "Title",
                  },
                  {
                    value: "type",
                    label: "Type",
                    options: ["MODULE", "COURSE_FILE", "WORKTEXT", "TEXTBOOK"],
                  },
                  {
                    value: "owner",
                    label: "Owner",
                  },
                  {
                    value: "authors",
                    label: "Authors",
                  },
                  {
                    value: "status",
                    label: "Status",
                    options: IMStatuses,
                  },
                ]}
                onChange={(filter) =>
                  setState((prev) => ({ ...prev, ...filter }))
                }
              />
              <div className=' grid grid-flow-col auto-cols-max gap-2 px-2 '>
                {/* <input
                  onChange={debouncedHandleSerialNumberChange}
                  className='bg-CITLGray-light w-32 border-CITLGray-lighter border text-CITLGray-main rounded-lg text-sm font-medium'
                  type='text'
                  placeholder='Serial Number'
                ></input> */}
              </div>
            </div>
          </div>

          <table className='divide-y divide-CITLGray-light mb-2'>
            <thead className='bg-CITLGray-light'>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  <SortButton
                    label='Title'
                    sortOrder={
                      state.sortColumn === "title" ? state.sortOrder : undefined
                    }
                    setSortOrder={(order) =>
                      setState((prev) => ({
                        ...prev,
                        sortColumn: "title",
                        sortOrder: order,
                      }))
                    }
                  />
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  <SortButton
                    label='Type'
                    sortOrder={
                      state.sortColumn === "type" ? state.sortOrder : undefined
                    }
                    setSortOrder={(order) =>
                      setState((prev) => ({
                        ...prev,
                        sortColumn: "type",
                        sortOrder: order,
                      }))
                    }
                  />
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  <SortButton
                    label='Owner'
                    sortOrder={
                      state.sortColumn === "owner.user.name"
                        ? state.sortOrder
                        : undefined
                    }
                    setSortOrder={(order) =>
                      setState((prev) => ({
                        ...prev,
                        sortColumn: "owner.user.name",
                        sortOrder: order,
                      }))
                    }
                  />
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  <SortButton
                    label='Authors'
                    sortOrder={
                      state.sortColumn === "authors"
                        ? state.sortOrder
                        : undefined
                    }
                    setSortOrder={(order) =>
                      setState((prev) => ({
                        ...prev,
                        sortColumn: "authors",
                        sortOrder: order,
                      }))
                    }
                  />
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  <SortButton
                    label='Status'
                    sortOrder={
                      state.sortColumn === "status"
                        ? state.sortOrder
                        : undefined
                    }
                    setSortOrder={(order) =>
                      setState((prev) => ({
                        ...prev,
                        sortColumn: "status",
                        sortOrder: order,
                      }))
                    }
                  />
                </th>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Review
                </th>

                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  <SortButton
                    label='Date'
                    sortOrder={
                      state.sortColumn === "date" ? state.sortOrder : undefined
                    }
                    setSortOrder={(order) =>
                      setState((prev) => ({
                        ...prev,
                        sortColumn: "date",
                        sortOrder: order,
                      }))
                    }
                  />
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
                  <SortButton
                    label='Serial No.'
                    sortOrder={
                      state.sortColumn === "serialNumber"
                        ? state.sortOrder
                        : undefined
                    }
                    setSortOrder={(order) =>
                      setState((prev) => ({
                        ...prev,
                        sortColumn: "serialNumber",
                        sortOrder: order,
                      }))
                    }
                  />
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
                  className={` bg-white text-sm text-CITLGray-main text-left p-4 animate-pulse`}
                >
                  {/* <td className='px-6 py-4 truncate '>{serialNumber}</td> */}

                  <td className='px-6 py-4 '>
                    <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                    <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
                  </td>

                  <td className='px-6 py-4 '>
                    <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                    <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
                  </td>

                  <td className='px-6 py-4 '>
                    <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                    <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
                  </td>

                  <td className='px-6 py-4 '>
                    <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                    <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
                  </td>
                  <td className='px-4 py-4 space-x-1'>
                    <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                    <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
                  </td>

                  <td className='px-6 py-4 '>
                    <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                    <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
                  </td>

                  <td className='px-6 py-4 '>
                    <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                    <div className='w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
                  </td>

                  {/* <td className='px-6 py-4 '>
                    {moment(updatedAt).format("M/D/YYYY, h:mm A")}
                  </td> */}

                  <td className='bg-white  font-medium text-slate-400  items-center justify-center px-6 py-4 '>
                    <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                  </td>

                  <td className='bg-white  font-medium text-slate-400  items-center justify-center px-6 py-4 '>
                    <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                  </td>

                  <td className='bg-white  font-medium text-slate-400  items-center justify-center px-6 py-4 '>
                    <div className='h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5'></div>
                  </td>
                </tr>
              )}{" "}
              {!loading &&
                ims.map((im, index) => {
                  return (
                    <IM
                      showStatus={true}
                      showReviewSuggestion={true}
                      authors={im.authors}
                      showOwner={true}
                      showReviewedAs={true}
                      showSerialNumber={true}
                      // bottomBorder={index < state.ims.length - 1}
                      im={im}
                      peerReviewed={Boolean(im.SubmittedPeerReview)}
                      chairpersonReviewed={Boolean(
                        im.SubmittedChairpersonReview
                      )}
                      coordinatorReviewed={Boolean(
                        im.SubmittedCoordinatorReview
                      )}
                      peerSuggested={Boolean(im.SubmittedPeerSuggestion)}
                      chairpersonSuggested={Boolean(
                        im.SubmittedChairpersonSuggestion
                      )}
                      coordinatorSuggested={Boolean(
                        im.SubmittedCoordinatorSuggestion
                      )}
                      bottomBorder={true}
                      date={im.date}
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
