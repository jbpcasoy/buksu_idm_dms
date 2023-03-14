export default function Suggestions({}) {
  return (
    <tr
      className={` bg-white border-b border-CITLGray-light text-sm text-CITLGray-main text-left p-4 `}
    >
      <td className='px-5 py-4 '>
        <input
          name='name'
          type='text'
          placeholder='--'
          className='border-0 border-b-2 border-CITLGray-lighter outline-none  focus:ring-0 pl-0 text-CITLGray-main'
        />
      </td>

      <td className='px-1 py-4 '>
        <input
          name='name'
          type='text'
          placeholder='--'
          className='border-0 border-b-2 border-CITLGray-lighter outline-none  focus:ring-0 pl-0 text-CITLGray-main'
        />
      </td>

      <td className='px-1py-4 '>
        <input
          name='name'
          type='text'
          placeholder='--'
          className='border-0 border-b-2 border-CITLGray-lighter outline-none  focus:ring-0 pl-0 text-CITLGray-main'
        />
      </td>

      <td className='px-1 py-4 '>
        <input
          name='name'
          type='text'
          placeholder='--'
          className='border-0 border-b-2 border-CITLGray-lighter outline-none  focus:ring-0 pl-0 text-CITLGray-main'
        />

        {/* <input
            type='text'
            class='py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400'
          /> */}
      </td>
    </tr>
  );
}
