import Layout from "@/components/layout/Layout";
import frontendReadColleges from "@/services/frontend/admin/college/frontendReadColleges";
import College from "@/views/College";
import _ from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CollegePage() {
  const [colleges, setColleges] = useState([]);
  const [state, setState] = useState({ limit: 5, page: 1, name: "" });
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const router = useRouter();

  useEffect(() => {
    let subscribe = true;
    setLoading(true);

    frontendReadColleges({
      page: state.page,
      limit: state.limit,
      name: state.name,
    }).then((res) => {
      setLoading(false);
      if (!subscribe) return;

      setColleges(res.data);
      setTotal(res.total);
    });

    return () => {
      subscribe = false;
    };
  }, [state]);

  function handleNameChange(e) {
    setState((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  }
  const debouncedHandleNameChange = _.debounce(handleNameChange, 800);

  return (
    <Layout>
      <div>
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
          </div>

          <img
            className='md:w-2/12 sm:w-12/12 rounded-lg object-cover relative shadow-lg'
            src='/IMAGES/DSC_6510.jpg'
            alt='Announcement Image'
          />
        </div>
        <div className='flex flex-wrap items-center border border-CITLGray-lighter bg-CITLWhite m-2 mt-5 relative rounded-lg shadow-lg overflow-hidden'>
          <div className='flex items-center bg-CITLGray-light justify-between py-3 px-3 w-full'>
            <div className='flex space-between'>
              <button
                type='button'
                className='inline-flex items-center px-2 py-2.5 text-sm font-medium text-center text-CITLDarkBlue border-b-2 border-CITLOrange rounded-none'
              >
                <span className='inline-flex items-center justify-center w-4 h-4 mr-1 text-xs font-semibold text-CITLWhite bg-CITLOrange rounded-full '>
                  2
                </span>
                <span>Colleges</span>
              </button>
            </div>

            <div className='flex'>
              <input
                className='w-72 py-2 pr-10 pl-4 bg-CITLGray-light border-CITLGray-lighter border text-CITLGray-main rounded-lg mr-5'
                type='text'
                placeholder='Name'
                onChange={debouncedHandleNameChange}
              ></input>
            </div>
          </div>
          <table className='min-w-full divide-y divide-CITLGray-light'>
            <thead className='bg-CITLGray-light'>
              <tr>
                <th
                  scope='col'
                  className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Colleges
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
              {colleges.map((college, index) => (
                <College
                  onView={() =>
                    router.push(`/college/${college.id}/department`)
                  }
                  bottomBorder={true}
                  name={college.name}
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
    </Layout>
  );
}
