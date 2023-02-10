import { useState } from "react";

export default function ProfileFormView({ onSubmit, defaultName }) {
  const [state, setState] = useState({ name: defaultName ?? "" });
  return (
    <form
      class='w-full max-w-sm'
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(state);
      }}>
      <div class='mb-4'>
        <input
          class='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
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
      <div class='flex items-center justify-center'>
        <button
          class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'
          value='Save'>
          Save
        </button>
      </div>
    </form>
  );
}
