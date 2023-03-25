export default function SortButton({
  label,
  sortOrder = undefined,
  setSortOrder = () => {},
}) {
  function handleClick() {
    switch (sortOrder) {
      case "asc":
        return setSortOrder("desc");
      case "desc":
        return setSortOrder(undefined);
      default:
        return setSortOrder("asc");
    }
  }

  return (
    <button onClick={handleClick} className='uppercase'>
      {label}
      {sortOrder === "asc" && (
        <svg
          fill='none'
          class='w-4 h-3 inline-flex ml-1'
          stroke='currentColor'
          stroke-width='1.5'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M4.5 15.75l7.5-7.5 7.5 7.5'
          ></path>
        </svg>
      )}

      {sortOrder === "desc" && (
        <svg
          fill='none'
          class='w-4 h-3 inline-flex ml-1'
          stroke='currentColor'
          stroke-width='1.5'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M19.5 8.25l-7.5 7.5-7.5-7.5'
          ></path>
        </svg>
      )}

      {sortOrder === undefined && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          class='w-2 h-3 inline-flex ml-1'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 320 512'
        >
          <path d='M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z' />
        </svg>
      )}
    </button>
  );
}
