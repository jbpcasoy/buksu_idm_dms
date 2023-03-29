import Layout from "@/components/layout/Layout";
import useFiles from "@/hooks/file/useFiles";
import VersionItem from "@/views/im/version/VersionItem";
import { useRouter } from "next/router";
import { useState } from "react";

export default function IMVersions() {
  const router = useRouter();
  const [state, setState] = useState({
    limit: 10,
    page: 1,
  });
  const { files, filesLoading, filesError, filesRefresh } = useFiles({
    iMId: router?.query?.id,
    limit: state.limit,
    page: state.page,
  });

  return (
    <Layout>
      <div className='py-4 md:w-full '>
        <div className='relative overflow-x-auto shadow-md border rounded-lg  border-CITLGray-lighter bg-CITLGray-light'>
          <div className='justify-between flex p-5 '>
            <h6 className='py-5 pl-10 text-2xl font-bold text-left text-CITLDarkBlue '>
              Instructional Material Versions
            </h6>
          </div>

          <ol className='relative border-l border-CITLOrange ml-10 '>
            {files?.data?.map((file) => (
              <VersionItem
                key={file.id}
                date={file.createdAt}
                fileId={file.id}
                fileName={file.originalFileName}
                iMId={router?.query?.id}
              />
            ))}
          </ol>
        </div>

        <div className='flex flex-row items-center justify-end px-6 py-3 w-full'>
          {!filesLoading && (
            <span className='text-sm text-gray-700 dark:text-gray-400 '>
              Showing{" "}
              <span className='font-semibold text-gray-900 dark:text-white'>
                {state.limit * (state.page - 1) + 1 > files.total
                  ? 0
                  : state.limit * (state.page - 1) + 1}
              </span>
              {" - "}
              <span className='font-semibold text-gray-900 dark:text-white'>
                {state.limit * state.page > files.total
                  ? files.total
                  : state.limit * state.page}
              </span>{" "}
              of{" "}
              <span className='font-semibold text-gray-900 dark:text-white'>
                {files.total}
              </span>{" "}
              Entries
            </span>
          )}
          {filesLoading && (
            <span className='text-sm text-gray-700 dark:text-gray-400 '>
              Loading...
            </span>
          )}
          <div className='inline-flex xs:mt-0 ml-2 gap-x-1'>
            <button
              className='inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:bg-CITLGray-main'
              disabled={state.page <= 1 || filesLoading}
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
                !(state.page * state.limit < files.total) || filesLoading
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
      </div>
    </Layout>
  );
}
