export default function SuggestionView({ children, title, viewOnly = false }) {
  return (
    <div className='border border-CITLOrange rounded-lg mb-5 overflow-hidden'>
      <div className='bg-CITLGray-light rounded-t-lg py-3 px-3 pr-3'>
        <div className='flex justify-between '>
          <div>
            <h2 className='pt-2 font-semibold text-CITLDarkBlue '>{title}</h2>
            <div className='flex flex-cols mt-2'>
              <img
                src='/IMAGES/2x2.png'
                className='h-8 rounded-full sm:h-8'
                alt='owner'
              ></img>

              <div className=''>
                <h2 className='text-xs font-semibold text-CITLGray-main pl-3 -mb-1'>
                  Glenmark Artiaga
                </h2>
                <time className='text-xs text-CITLGray-main pl-3 '>
                  March 23, 2023 | 9:00 AM
                </time>
              </div>
            </div>
          </div>
        </div>
      </div>
      <table className='w-full divide-y divide-CITLGray-light overflow-hidden'>
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
              className='px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
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
            {!viewOnly && (
              <th
                scope='col'
                className=' py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
              >
                Actions
              </th>
            )}
          </tr>
        </thead>

        <tbody className='bg-white divide-gray-200 overflow-y-auto'>
          {children}
        </tbody>
      </table>
    </div>
  );
}
