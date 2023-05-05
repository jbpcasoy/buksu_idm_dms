import useUserEvents from "@/hooks/im_event/useUserEvent";
import { useRouter } from "next/router";
import { useState } from "react";
import IMEvent from "../im_event/IMEvent";

export default function UserEvents({ facultyId }) {
  const router = useRouter();
  const [state, setState] = useState({
    limit: 10,
    page: 1,
  });

  const { iMEvents, iMEventsLoading, iMEventsError } = useUserEvents({
    limit: state.limit,
    page: state.page,
    facultyId: facultyId,
  });

  return (
    <>
      <div className='flex flex-wrap items-center border border-slate-300  bg-CITLGray-light m-2 p-3 relative rounded-lg shadow-lg overflow-x-auto'>
        <div className='px-6 py-4 md:w-10/12 sm:w-12/12'>
          <h3 className='text-lg font-semibold text-CITLDarkBlue mb-12'>
            Instructional Material Action History
          </h3>
          <ol className='relative border-l border-CITLDarkBlue dark:border-gray-700'>
            {iMEvents?.data?.map((iMEvent) => {
              return <IMEvent iMEventId={iMEvent.id} key={iMEvent.id} />;
            })}
          </ol>{" "}
        </div>
      </div>
      <div className='flex flex-row items-center justify-end px-6 py-3 w-full'>
        {!iMEventsLoading && (
          <span className='text-sm text-gray-700 dark:text-gray-400 '>
            Showing{" "}
            <span className='font-semibold text-gray-900 dark:text-white'>
              {state.limit * (state.page - 1) + 1 > iMEvents?.total
                ? 0
                : state.limit * (state.page - 1) + 1}
            </span>
            {" - "}
            <span className='font-semibold text-gray-900 dark:text-white'>
              {state.limit * state.page > iMEvents?.total
                ? iMEvents?.total
                : state.limit * state.page}
            </span>{" "}
            of{" "}
            <span className='font-semibold text-gray-900 dark:text-white'>
              {iMEvents?.total}
            </span>{" "}
            Entries
          </span>
        )}
        {iMEventsLoading && (
          <span className='text-sm text-gray-700 dark:text-gray-400 '>
            Loading...
          </span>
        )}
        <div className='inline-flex xs:mt-0 ml-2 gap-x-1'>
          <button
            className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:bg-CITLGray-main'
            disabled={state.page <= 1 || iMEventsLoading}
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
            disabled={
              !(state.page * state.limit < iMEvents?.total) || iMEventsLoading
            }
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
    </>
  );
}
