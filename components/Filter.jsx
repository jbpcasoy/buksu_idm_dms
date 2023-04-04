import { useEffect, useState } from "react";

export default function Filter({ filterOptions = [], onChange }) {
  const [filter, setFilter] = useState({});
  useEffect(() => {
    onChange(filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <div class='grid grid-cols-3 gap-1 '>
      {Object.keys(filter).map((filterColumn) => {
        if (!filter[filterColumn]) return;
        return (
          <FilterItem
            filterOptions={filterOptions}
            key={filterColumn}
            filterColumn={filterColumn}
            value={filter[filterColumn]}
            onDelete={() =>
              setFilter((prev) => {
                const newFilter = { ...prev };
                newFilter[filterColumn] = undefined;
                return newFilter;
              })
            }
          />
        );
      })}
      <FilterInput
        filterOptions={filterOptions}
        onAdd={({ filterColumn, value }) => {
          setFilter((prev) => {
            const newFilter = { ...prev };
            newFilter[filterColumn] = value;
            return newFilter;
          });
        }}
      />
    </div>
  );
}

function FilterInput({ filterOptions, onAdd }) {
  const [state, setState] = useState({
    filterColumn: filterOptions[0]?.value,
    value: "",
  });
  const [currentFilterOption, setCurrentFilterOption] = useState();

  useEffect(() => {
    const filterOption = filterOptions.find(
      (filter) => filter.value === state.filterColumn
    );
    setCurrentFilterOption(filterOption);
  }, [state, filterOptions]);

  return (
    <div className='flex'>
      <select
        id='default'
        className='bg-CITLGray-light border-CITLGray-lighter border text-CITLGray-main rounded-l-md text-sm font-medium w-28'
        value={state.filterColumn}
        onChange={(e) =>
          setState((prev) => ({
            ...prev,
            filterColumn: e.target.value,
            value: "",
          }))
        }
      >
        {filterOptions.map((filterOption) => (
          <option key={filterOption.value} value={filterOption.value}>
            {filterOption.label}
          </option>
        ))}
      </select>
      {!currentFilterOption?.options && (
        <input
          type='text'
          className='bg-CITLGray-light border-CITLGray-lighter border border-l-0 text-CITLGray-main  text-sm font-medium w-28'
          placeholder='Filter'
          value={state.value}
          onChange={(e) =>
            setState((prev) => ({ ...prev, value: e.target.value }))
          }
        />
      )}
      {currentFilterOption?.options && (
        <select
          id='default'
          className='bg-CITLGray-light border-CITLGray-lighter border text-CITLGray-main  text-sm font-medium w-28'
          value={state.value}
          onChange={(e) =>
            setState((prev) => ({ ...prev, value: e.target.value }))
          }
        >
          <option key={"Filter"} value=''>
            Filter
          </option>
          {currentFilterOption.options.map((option, index) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}
      <button
        data-modal-target='suggestion-modal'
        data-modal-toggle='suggestion-modal'
        className='bg-CITLGray-light px-4 rounded-r-md border-CITLGray-lighter border border-l-0 text-CITLGray-main  text-sm font-medium disabled:text-CITLGray-lighter'
        type='button'
        disabled={!state.value}
        onClick={() => {
          onAdd(state);
          setState((prev) => ({ ...prev, value: "" }));
        }}
      >
        <svg
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          className='w-5 h-5'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 6v12m6-6H6'
          ></path>
        </svg>
      </button>
    </div>
  );
}

function FilterItem({ filterOptions, filterColumn, value, onDelete }) {
  return (
    <div className='flex'>
      <select
        id='default'
        className='bg-CITLGray-light border-CITLGray-lighter border text-CITLGray-main rounded-l-md text-sm font-medium w-28'
        value={filterColumn}
        disabled
      >
        {filterOptions.map((filterOption) => (
          <option key={filterOption.value} value={filterOption.value}>
            {filterOption.label}
          </option>
        ))}
      </select>
      <input
        type='text'
        className='bg-CITLGray-light border-CITLGray-lighter border border-l-0 text-CITLGray-lighter  text-sm font-medium w-28'
        placeholder='Filter'
        value={value}
        disabled
      />
      <button
        data-modal-target='suggestion-modal'
        data-modal-toggle='suggestion-modal'
        className='bg-CITLGray-light px-4 rounded-r-md border-CITLGray-lighter border border-l-0 text-CITLGray-main  text-sm font-medium'
        type='button'
        onClick={onDelete}
      >
        <svg
          fill='none'
          stroke='currentColor'
          strokeWidth='1.5'
          className='w-5 h-5'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
          ></path>
        </svg>
      </button>
    </div>
  );
}
