import Layout from "@/components/layout/Layout";
import NotificationItem from "@/components/notification/NotificationItem";
import useNotifications from "@/hooks/notification/useNotifications";
import useUser from "@/hooks/useUser";
import { useState } from "react";

export default function Notifications() {
  const { user, userError, useLoading } = useUser();
  const [state, setState] = useState({
    page: 1,
    limit: 5,
    read: false,
  });
  const { notifications, notificationsLoading, notificationsError } =
    useNotifications({
      limit: state.limit,
      page: state.page,
      userId: user?.id,
      read: state.read,
    });

  return (
    <Layout>
      <div className='flex flex-wrap items-center border border-slate-300  bg-CITLGray-light relative rounded-lg shadow-lg overflow-hidden m-2'>
        <div className='flex w-full justify-between px-4 py-4 text-xl font-semibold text-left text-gray-700 rounded-t-lg bg-CITLGray-light dark:bg-gray-800 dark:text-white'>
          <div className='pt-2'>Notifications</div>
          <div>
            <select
              value={state.read}
              onChange={(e) =>
                setState((prev) => ({ ...prev, read: e.target.value, page: 1 }))
              }
              id='default'
              className='bg-CITLGray-light w-32 border-CITLGray-lighter border text-CITLGray-main rounded-lg text-sm font-medium'
            >
              <option value=''>All</option>
              <option value={true}>Read</option>
              <option value={false}>Unread</option>
            </select>
          </div>
        </div>

        <div className='divide-y divide-gray-100 dark:divide-gray-700 w-full'>
          {notifications?.data?.map((notification) => (
            <NotificationItem
              notification={notification}
              key={notification.id}
            />
          ))}
          <div className='flex flex-row items-center bg-CITLGray-light justify-end  py-3 w-full'>
            {/* <span className='text-sm text-gray-700 dark:text-gray-400 '>
              Showing{" "}
              <span className='font-semibold text-gray-900 dark:text-white'></span>
              <span className='font-semibold text-gray-900 dark:text-white'></span>{" "}
              of{" "}
              <span className='font-semibold text-gray-900 dark:text-white'></span>{" "}
              Entries
            </span> */}

            <div className='flex flex-row items-center justify-end py-3 w-full'>
              {!notificationsLoading && (
                <span className='text-sm text-gray-700 dark:text-gray-400 '>
                  Showing{" "}
                  <span className='font-semibold text-gray-900 dark:text-white'>
                    {state.limit * (state.page - 1) + 1 > notifications?.total
                      ? 0
                      : state.limit * (state.page - 1) + 1}
                  </span>
                  {" - "}
                  <span className='font-semibold text-gray-900 dark:text-white'>
                    {state.limit * state.page > notifications?.total
                      ? notifications?.total
                      : state.limit * state.page}
                  </span>{" "}
                  of{" "}
                  <span className='font-semibold text-gray-900 dark:text-white'>
                    {notifications?.total}
                  </span>{" "}
                  Entries
                </span>
              )}
              {notificationsLoading && (
                <span className='text-sm text-gray-700 dark:text-gray-400 '>
                  Loading...
                </span>
              )}

              <div className='inline-flex xs:mt-0 ml-2 gap-x-1'>
                <button
                  className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:bg-CITLGray-main'
                  disabled={state.page <= 1 || notificationsLoading}
                  onClick={() => {
                    setState((prev) => ({ ...prev, page: prev.page - 1 }));
                  }}
                >
                  <svg
                    aria-hidden='true'
                    className='w-4 h-54 mr-2'
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
                    !(state.page * state.limit < notifications?.total) ||
                    notificationsLoading
                  }
                  onClick={() => {
                    setState((prev) => ({ ...prev, page: prev.page + 1 }));
                  }}
                >
                  Next
                  <svg
                    aria-hidden='true'
                    className='w-4 h-4 ml-2'
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
      </div>
    </Layout>
  );
}
