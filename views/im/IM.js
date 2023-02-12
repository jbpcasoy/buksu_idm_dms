export default function IM({
  id,
  serialNumber,
  title,
  status,
  owner,
  fileName,
  createdAt,
  updatedAt,
  onView,
}) {
  return (
    <tr>
      <td>{id}</td>
      <td>{serialNumber}</td>
      <td>{title}</td>
      <td>{status}</td>
      <td>{owner.name}</td>
      <td>{fileName}</td>
      <td>{createdAt}</td>
      <td>{updatedAt}</td>
      <td>
        <button
          onClick={onView}
          class='bg-blue-500 hover:bg-blue-700 text-white text-sm py-2 px-4 rounded'>
          View
        </button>
      </td>
    </tr>
  );
}
