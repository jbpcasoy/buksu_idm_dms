import SuggestionItemMenu from "./SuggestionItemMenu";

export default function SuggestionItem({
  value,
  suggestionItemId,
  actionTaken,
  pageNumber,
  remarks,
  onDelete,
  onEdit,
}) {
  return (
    <tr
      className={`bg-white border-b border-CITLGray-light text-sm text-CITLGray-main text-left p-4 `}
    >
      <td className='px-5 py-4 '>{value}</td>

      <td className='px-1 py-4 '>{actionTaken}</td>

      <td className='px-1py-4 '>{pageNumber}</td>

      <td className='px-1 py-4 '>{remarks}</td>
      <td className='px-1 py-4 '>
        <SuggestionItemMenu
          suggestionItemId={suggestionItemId}
          value={value}
          pageNumber={pageNumber}
          remarks={remarks}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      </td>
    </tr>
  );
}
