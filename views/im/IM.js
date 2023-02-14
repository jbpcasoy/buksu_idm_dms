export default function IM({
  id,
  serialNumber,
  title,
  status,
  owner,
  originalFileName,
  fileName,
  createdAt,
  updatedAt,
  onView,
}) {
  return (
    <tr>
      {/* <td>
        <input type="checkbox" className=" checked:bg-blue-500 text-lg bg-white border-b dark:border-slate-600 font-medium text-slate-400  text-left" />
      </td> */}
      {/* <td className="bg-white border-b dark:border-slate-600 font-medium text-slate-400  text-left">{id}</td> */}

      <td className="bg-white border-b dark:border-slate-600 font-medium text-slate-400  text-left p-4 ">
        {serialNumber}
      </td>

      <td className="bg-white border-b dark:border-slate-600 font-medium text-slate-400  text-left">{title}</td>

      <td className="bg-white border-b dark:border-slate-600 font-medium text-slate-400  text-left">{status}</td>

      <td className="bg-white border-b dark:border-slate-600 font-medium text-slate-400  text-left">{owner.name}</td>

      <td className="bg-white border-b dark:border-slate-600 font-medium text-slate-400  text-left">{originalFileName}</td>

      {/* <td className="bg-white border-b dark:border-slate-600 font-medium text-slate-400  text-left">{fileName}</td> */}

      <td className="bg-white border-b dark:border-slate-600 font-medium text-slate-400  text-left">{createdAt}</td>

      <td className="bg-white border-b dark:border-slate-600 font-medium text-slate-400  text-left">{updatedAt}</td>

      <td className="bg-white border-b dark:border-slate-600 font-medium text-slate-400  text-left">
        <button
          onClick={onView}
          class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white text-sm py-2 px-4 rounded"
        >
          View
        </button>
      </td>
    </tr>
  );
}
