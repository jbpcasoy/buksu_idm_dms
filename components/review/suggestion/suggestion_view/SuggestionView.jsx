export default function SuggestionView({ children, title, viewOnly = false }) {
  return (
    <div className='border border-CITLOrange rounded-lg mb-5 overflow-hidden'>
      <div className='bg-CITLGray-light rounded-t-lg py-3 px-3 pr-3'>
        <div className='flex justify-between text-center'>
          <h2 className='pt-2 font-semibold text-CITLDarkBlue '>{title}</h2>
        </div>
      </div>
      <table className='w-full divide-y divide-CITLGray-light overflow-hidden'>
        <thead className='bg-CITLGray-light'>
          <tr>
            <th
              scope='col'
              className=' px-5 py-3 text-left w-4/5 text-xs font-medium text-gray-500 uppercase tracking-wider'
            >
              suggestion
            </th>

            {/* <th
              scope='col'
              className=' py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'
            >
              Action Taken
            </th> */}

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
