import { useState } from "react";

export default function ProfileFormView({ onSubmit, defaultName }) {
  const [state, setState] = useState({ name: defaultName ?? "" });
  return (
    <form
      className='w-full max-w-sm'
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(state);
      }}>
      <div className='mb-4'>
        <input
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          type='text'
          placeholder='Name'
          value={state.name}
          onChange={(e) =>
            setState((prev) => {
              return { ...prev, name: e.target.value };
            })
          }
        />
      </div>
      <div className='flex items-center justify-center'>
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'
          value='Save'>
          Save
        </button>
      </div>
    </form>
  );
}
