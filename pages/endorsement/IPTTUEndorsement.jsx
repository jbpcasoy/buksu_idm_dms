import Layout from "@/components/layout/Layout";
import QAMIS from "@/views/QAMIS/QAMIS";

export default function Home() {
  return (
    <Layout>
      <div className=' grid grid-flow-row items-center border border-CITLGray-lighter bg-CITLWhite m-2 mt-5 relative rounded-lg shadow-lg overflow-x-auto'>
        <div className='px-6 pt-12 md:w-full '>
          <h2 className='text-gray-800 font-bold text-xl '>
            Suggestions and Actions Taken on IM Evaluation from IMERC
          </h2>
          <p className='mb-8 text-sm'>for IPTTU Endorsement</p>
        </div>
        <div className='border border-CITLGray-lighter mx-5 rounded-lg'>
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

          <table className='w-full divide-y divide-CITLGray-light mb-2'>
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

            <tbody className='bg-white divide-gray-200 overflow-y-auto'>
              <QAMIS />
            </tbody>
          </table>
        </div>

        <div className='border border-CITLGray-lighter mx-5 rounded-lg mt-5 mb-5'>
          <div className='bg-CITLGray-light rounded-t-lg py-3 px-3 pr-3 '>
            <div className='flex justify-between text-center '>
              <h2 className='text-center pt-2 font-semibold'>B. IMERC</h2>
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

          <table className='w-full divide-y divide-CITLGray-light mb-2'>
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
