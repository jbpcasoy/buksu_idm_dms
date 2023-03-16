export default function SuggestionView({ children, title, viewOnly = false }) {
  return (
    <div>
      <p>{title}</p>
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
