import ActionTakenModal from "@/components/review/suggestion/suggestion_view/ActionTakenModal";

export default function SuggestionItemView({
  value,
  suggestionItemId,
  actionTaken,
  pageNumber,
  remarks,
  onEdit,
  viewOnly,
}) {
  return (
    <tr
      className={`bg-white border-b border-CITLGray-light text-sm text-CITLGray-main text-left p-4 `}
    >
      <td className='px-5 py-4 '>{value}</td>

      <td className='px-1 py-4 '>{actionTaken}</td>

      <td className='px-1py-4 '>{pageNumber}</td>

      <td className='px-1 py-4 '>{remarks}</td>
      {!viewOnly && (
        <td className='px-1 py-4'>
          <ActionTakenModal
            value={value}
            pageNumber={pageNumber}
            remarks={remarks}
            actionTaken={actionTaken}
            suggestionItemId={suggestionItemId}
            onSubmit={onEdit}
          />
        </td>
      )}
    </tr>
  );
}
