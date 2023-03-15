import SuggestionAddModal from "./SuggestionAddModal";

export default function Suggestion({
  onFinish,
  onPrevious,
  children,
  handleSubmit,
  iM,
}) {
  return (
    <div>
      <div className=' grid grid-flow-row items-center mt-5 relative overflow-x-auto'>
        <div className=' md:w-full '>
          <h2 className='text-gray-800 font-bold text-xl mb-8 '>
            Suggestions and Actions Taken
          </h2>
          {/* <p className='mb-8 text-sm'>for IPTTU Endorsement</p> */}
        </div>
        <div className='border border-CITLGray-lighter rounded-lg mb-5'>
          <div className='bg-CITLGray-light rounded-t-lg py-3 px-3 pr-3'>
            <div className='flex justify-between text-center '>
              <h2 className='text-center pt-2 font-semibold'>
                Part A. Program Review
              </h2>
              <SuggestionAddModal onSubmit={handleSubmit} />
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
                <th
                  scope='col'
                  className=' py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
                >
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className='bg-white divide-gray-200 overflow-y-auto'>
              {children}
            </tbody>
          </table>
        </div>
      </div>
      {process.env.NODE_ENV === "production" && iM && (
        <iframe
          src={`https://docs.google.com/gview?url=${process.env.NEXT_PUBLIC_HOST_URL}/api/download/file/${iM?.ActiveFile?.File.fileName}&embedded=true`}
          className='w-full h-screen'
        />
      )}
      {process.env.NODE_ENV !== "production" && iM && (
        <iframe
          src={`${process.env.NEXT_PUBLIC_HOST_URL}/api/download/file/${iM?.ActiveFile?.File.fileName}`}
          className='w-full h-screen'
        />
      )}
      <div className='flex mt-4'>
        <div className='flex-auto flex flex-row-reverse justify-between'>
          <button
            onClick={onFinish}
            className='text-base  ml-2 hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer shadow-xl hover:bg-CITLOrange bg-CITLDarkBlue text-CITLWhite  '
          >
            Finish
          </button>
          <button
            onClick={onPrevious}
            className='text-base  flex justify-center px-4 py-2 rounded font-bold cursor-pointer shadow-xl hover:border-CITLOrange hover:text-CITLOrange bg-gray-100  text-CITLGray-main  border  border-CITLGray-main'
          >
            Previous
          </button>
        </div>
      </div>
    </div>
  );
}
