export default function PreviewSection({ section, children }) {
  return (
    <div className=' mt-5 border border-CITLGray-lighter rounded-lg'>
      <label
        for='helper-radio-4'
        className='font-medium text-gray-900 dark:text-gray-300'
      >
        <h3 className=' text-left font-semibold text-lg bg-CITLGray-lighter rounded-tl-md rounded-tr-md text-CITLGray-main py-3 px-5'>
          {section.title}
        </h3>
      </label>
      {children}
    </div>
  );
}
