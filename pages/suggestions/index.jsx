import Layout from "@/components/layout/Layout";
import Suggestions from "@/views/suggestions/suggestions";

export default function Home() {
  return (
    <Layout>
      <div className=' grid grid-flow-row items-center border border-CITLGray-lighter bg-CITLWhite m-2 mt-5 relative rounded-lg shadow-lg overflow-x-auto'>
        <div className='px-6 pt-12 md:w-full '>
          <h2 className='text-gray-800 font-bold text-xl mb-8 '>
            Suggestions and Actions Taken
          </h2>
          {/* <p className='mb-8 text-sm'>for IPTTU Endorsement</p> */}
        </div>
        <div className='border border-CITLGray-lighter mx-5 rounded-lg mb-5'>
          <div className='bg-CITLGray-light rounded-t-lg py-3 px-3 pr-3'>
            <div className='flex justify-between text-center '>
              <h2 className='text-center pt-2 font-semibold'>
                Part A. Program Review
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
                  className=' px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  suggestion
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
                  Page No.
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
              <Suggestions />
            </tbody>
          </table>
        </div>

        {/* <div className='border border-CITLGray-lighter mx-5 rounded-lg mt-5  mb-5 '>
          <div className='bg-CITLGray-light rounded-t-lg py-3 px-3 pr-3 '>
            <div className='flex justify-between text-center '>
              <h2 className='text-center pt-2 font-semibold'>
                Part B. CITL Review
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
                  className='px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  suggestion
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
                  Page No.
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
              <Suggestions />
            </tbody>
          </table>
        </div> */}
      </div>
    </Layout>
  );
}
