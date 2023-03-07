import Layout from "@/components/layout/Layout";
import useUser from "@/hooks/useUser";
import frontendGetIMs from "@/services/frontend/im/frontendGetIMs";
import QAMIS from "@/views/QAMIS/QAMIS";
import _ from "lodash";
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
  }, [user, state, tab]);

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
      <div className=' grid grid-flow-row items-center border border-CITLGray-lighter bg-CITLWhite m-2 mt-5 relative rounded-lg shadow-lg overflow-x-auto'>
        <div className='px-6 pt-12 md:w-full '>
          <h2 className='text-gray-800 font-bold text-xl '>
            Suggestions and Actions Taken on IM Evaluation from IMERC
          </h2>
          <p className='mb-8 text-sm'>for IPTTU Endorsement</p>
        </div>
        <div className="border border-CITLGray-lighter mx-5 rounded-lg">
          <div className='bg-CITLGray-light rounded-t-lg py-3 px-3 pr-3'>
            <div className='flex justify-between text-center '>
              <h2 className='text-center pt-2 font-semibold'>
                A. QAMIS (Student and Teacher-Users)
              </h2>
              <button
                title='Add IM'
                className='flex items-center bg-CITLDarkBlue rounded-lg px-4 py-2.5 text-sm font-medium text-center shadow-md text-white '
                // onClick={() => {
                //   router.push("/im/new");
                // }}
              >
                Add row
              </button>
            </div>
          </div>

          <table className=' divide-y divide-CITLGray-light mb-2'>
            <thead className='bg-CITLGray-light'>
              <tr>
                <th
                  scope='col'
                  className='px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  No.
                </th>
                <th
                  scope='col'
                  className=' py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  suggestion
                </th>
                <th
                  scope='col'
                  className='py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  IM Part & Page No.
                </th>
                <th
                  scope='col'
                  className=' py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Action Taken
                </th>

                <th
                  scope='col'
                  className=' py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  IM Part & Page No.
                </th>
                <th
                  scope='col'
                  className=' py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Remarks
                </th>
              </tr>
            </thead>
            {/* <tbody className='bg-white divide-gray-200 overflow-y-auto'>
              {ims.map((im, index) => {
                return (
                  <IM
                    // bottomBorder={index < state.ims.length - 1}
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
                    key={im.id}
                  />
                );
              })}
            </tbody> */}
            <tbody className='bg-white divide-gray-200 overflow-y-auto'>
              <QAMIS />
            </tbody>
          </table>

          <div className='flex flex-row items-center justify-end px-6 py-3 mt-0 rounded-b-lg bg-CITLGray-light'>
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
                disabled={(state.page + 1) * state.limit > total || loading}
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

        <div className="border border-CITLGray-lighter mx-5 rounded-lg mt-5 ">
        <div className='bg-CITLGray-light rounded-t-lg py-3 px-3 pr-3 '>
          <div className='flex justify-between text-center '>
            <h2 className='text-center pt-2 font-semibold'>
              B. IMERC
            </h2>
            <button
              title='Add IM'
              className='flex items-center bg-CITLDarkBlue rounded-lg px-4 py-2.5 text-sm font-medium text-center shadow-md text-white '
              // onClick={() => {
              //   router.push("/im/new");
              // }}
            >
              Add row
            </button>
          </div>
        </div>

        <table className=' divide-y divide-CITLGray-light mb-2'>
          <thead className='bg-CITLGray-light'>
            <tr>
              <th
                scope='col'
                className='px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                No.
              </th>
              <th
                scope='col'
                className=' py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                suggestion
              </th>
              <th
                scope='col'
                className='py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                IM Part & Page No.
              </th>
              <th
                scope='col'
                className=' py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Action Taken
              </th>

              <th
                scope='col'
                className=' py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                IM Part & Page No.
              </th>
              <th
                scope='col'
                className=' py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Remarks
              </th>
            </tr>
          </thead>
          {/* <tbody className='bg-white divide-gray-200 overflow-y-auto'>
              {ims.map((im, index) => {
                return (
                  <IM
                    // bottomBorder={index < state.ims.length - 1}
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
                    key={im.id}
                  />
                );
              })}
            </tbody> */}
          <tbody className='bg-white divide-gray-200 overflow-y-auto'>
            <QAMIS />
          </tbody>
        </table>

        <div className='flex flex-row items-center justify-end px-6 py-3 mt-0 rounded-b-lg bg-CITLGray-light'>
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
              disabled={(state.page + 1) * state.limit > total || loading}
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
      </div>
    </Layout>
  );
}
