import Layout from "@/components/layout/Layout";
import SortButton from "@/components/SortButton";
import frontendReadActiveFaculties from "@/services/frontend/admin/active_faculty/frontendReadActiveFaculties";
import frontendReadDepartment from "@/services/frontend/department/frontendReadDepartment";
import Faculty from "@/views/Faculty";
import _ from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DepartmentPage() {
  const [department, setDepartment] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [activeFaculties, setActiveFaculties] = useState([]);
  const [state, setState] = useState({
    limit: 5,
    page: 1,
    name: "",
    sortOrder: "asc",
    sortColumn: "Faculty.user.name",
  });
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!router.query.departmentId) return;
    let subscribe = true;
    setLoading(true);

    frontendReadDepartment(router.query.departmentId).then((res) => {
      if (!subscribe) return;
      setDepartment(res);
      setLoading(false);
    });

    return () => {
      subscribe = false;
    };
  }, [router.query.departmentId]);

  useEffect(() => {
    if (!department) return;
    let subscribe = true;

    frontendReadActiveFaculties({
      limit: state.limit,
      page: state.page,
      departmentId: department.id,
      name: state.name,
      sortOrder: state.sortOrder,
      sortColumn: state.sortColumn,
    }).then((res) => {
      if (!subscribe) return;
      setActiveFaculties(res.data);
      setTotal(res.total);
    });

    return () => {
      subscribe = false;
    };
  }, [department, state]);

  useEffect(() => {
    console.log({ activeFaculties });
  }, [activeFaculties]);

  useEffect(() => {
    console.log({ department });
  }, [department]);

  function handleNameChange(e) {
    setState((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  }
  const debouncedHandleNameChange = _.debounce(handleNameChange, 800);

  return (
    <Layout>
      {!loading && (
        <div>
          {/* <div>
            <h1 className='text-xl'>{department?.name}</h1>
          </div>
          <div>
            <h2 className='text-lg'>Chairperson:</h2>
            <img
              alt='Chairperson'
              src={
                department?.ActiveChairperson?.Chairperson?.Faculty?.user?.image
              }
            />
            <p>
              {department?.ActiveChairperson?.Chairperson?.Faculty?.user
                ?.name ?? "None"}
            </p>
          </div>
          <div>
            <h2 className='text-lg'>Coordinator:</h2>
            <img
              alt='Coordinator'
              src={
                department?.ActiveCoordinator?.Coordinator?.Faculty?.user?.image
              }
            />
            <p>
              {department?.ActiveCoordinator?.Coordinator?.Faculty?.user
                ?.name ?? "None"}
            </p>
          </div> */}

          <div className='grid grid-flow-row items-center border border-CITLGray-lighter bg-CITLWhite m-2 mt-5 relative rounded-lg shadow-lg overflow-x-auto'>
            <div className='flex items-center bg-CITLGray-light justify-between py-3 px-3 w-full'>
              {/* 1. if nav IS active (text-CITLDarkBlue border-b-2 border-CITLOrange) if nav is NOT active (text-CITLGray-main)
                2. if nav IS active Badge should be active as well. Otherwise, it should be hidden.
            
            */}
              <nav className='flex' aria-label='Breadcrumb'>
                <ol className='inline-flex items-center space-x-1 md:space-x-3'>
                  <li className='inline-flex items-center'>
                    <button
                      type='button'
                      onClick={() => router.push(`/college`)}
                      className='inline-flex items-center px-2 py-2.5 text-sm font-medium text-center text-CITLDarkBlue rounded-none'
                    >
                      <span className='inline-flex items-center justify-center w-4 h-4 mr-1 text-xs font-semibold text-CITLWhite bg-CITLOrange rounded-full '>
                        {router?.query?.collegeCount}
                      </span>
                      Colleges
                    </button>
                  </li>
                  <li>
                    <div className='flex items-center'>
                      <svg
                        aria-hidden='true'
                        className='w-6 h-6 text-gray-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                      <button
                        onClick={() =>
                          router.push(
                            `/college/${router.query.id}/department?collegeCount=${router?.query?.collegeCount}`
                          )
                        }
                        className='inline-flex items-center px-2 py-2.5 text-sm font-medium text-center text-CITLDarkBlue rounded-none'
                      >
                        <span className='inline-flex items-center justify-center w-4 h-4 mr-1 text-xs font-semibold text-CITLWhite bg-CITLOrange rounded-full '>
                          {router?.query?.departmentCount}
                        </span>
                        Departments
                      </button>
                    </div>
                  </li>
                  <li aria-current='page'>
                    <div className='flex items-center'>
                      <svg
                        aria-hidden='true'
                        className='w-6 h-6 text-gray-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                      <span className='inline-flex items-center px-2 py-2.5 text-sm font-medium text-center text-CITLDarkBlue border-b-2 border-CITLOrange rounded-none'>
                        <span className='inline-flex items-center justify-center w-4 h-4 mr-1 text-xs font-semibold text-CITLWhite bg-CITLOrange rounded-full '>
                          {total}
                        </span>
                        Faculty
                      </span>
                    </div>
                  </li>
                </ol>
              </nav>

              {/* if the chairperson and coordinator IS active both avatars should be visible. if one is NOT active it should be hidden*/}

              <div className='flex space-between gap-6 items-center'>
                <div className='flex -space-x-4'>
                  <Link
                    href={`/profile/${department?.ActiveChairperson?.Chairperson?.Faculty?.user?.id}`}
                  >
                    <img
                      className='w-10 h-10 border-2 border-CITLOrange rounded-full dark:border-gray-800'
                      src={
                        department?.ActiveChairperson?.Chairperson?.Faculty
                          ?.user?.image
                      }
                      title='Chairperson'
                      alt=''
                    />
                  </Link>

                  <Link
                    href={`/profile/${department?.ActiveCoordinator?.Coordinator?.Faculty?.user?.id}`}
                  >
                    <img
                      className='w-10 h-10 border-2 border-CITLOrange rounded-full dark:border-gray-800'
                      src={
                        department?.ActiveCoordinator?.Coordinator?.Faculty
                          ?.user?.image
                      }
                      title='Coordinator'
                      alt=''
                    />
                  </Link>
                </div>

                {/* <p>{department?.name}</p> */}

                <div className='flex'>
                  <input
                    className='w-72 py-2 pr-10 pl-4 bg-CITLGray-light border-CITLGray-lighter border text-CITLGray-main rounded-md mr-5'
                    type='text'
                    placeholder='Name'
                    onChange={debouncedHandleNameChange}
                  ></input>
                </div>
              </div>
            </div>
            <table className='min-w-full divide-y divide-CITLGray-light'>
              <thead className='bg-CITLGray-light'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-3 w-20 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Image
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    <SortButton
                      label='Name'
                      sortOrder={
                        state.sortColumn === "Faculty.user.name"
                          ? state.sortOrder
                          : undefined
                      }
                      setSortOrder={(order) =>
                        setState((prev) => ({
                          ...prev,
                          sortColumn: "Faculty.user.name",
                          sortOrder: order,
                        }))
                      }
                    />
                  </th>

                  <th
                    scope='col'
                    className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-gray-200 overflow-y-auto'>
                {activeFaculties.map((activeFaculty, index) => (
                  <Faculty
                    onView={() =>
                      router.push(`/profile/${activeFaculty.userId}`)
                    }
                    image={activeFaculty.Faculty.user.image}
                    bottomBorder={true}
                    name={activeFaculty.Faculty.user.name}
                    id={index}
                    key={index}
                  />
                ))}
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
        </div>
      )}
    </Layout>
  );
}
