export default function College({ name, onView, bottomBorder = true }) {
  return (
    <tr
      className={` bg-white ${
        bottomBorder ? "border-b dark:border-CITLGray-light" : ""
      } text-sm text-CITLGray-main text-left p-4 `}
    >
      <td class="px-6 py-4 whitespace-nowrap">
        <input
          type="checkbox"
          class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
        />
      </td>

      <td className="px-6 py-4 ">{name}</td>

      <td className="bg-white  font-medium text-slate-400  items-center justify-center px-6 py-4 ">
        <button
          onClick={onView}
          className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-CITLOrange duration-300 text-white text-sm py-2 px-4 rounded mr-3"
        >
          View
        </button>
      </td>
    </tr>
  );
}
