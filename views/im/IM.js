export default function IM({
  id,
  serialNumber,
  title,
  status,
  owner,
  fileName,
  createdAt,
  updatedAt,
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
    </tr>
  );
}
