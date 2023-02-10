import { useState } from "react";

export default function ProfileFormView({ onSubmit, defaultName }) {
  const [state, setState] = useState({ name: defaultName ?? "" });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(state);
      }}>
      <input
        type='text'
        placeholder='Name'
        value={state.name}
        onChange={(e) =>
          setState((prev) => {
            return { ...prev, name: e.target.value };
          })
        }
      />
      <br />
      <input type='submit' value='Save' />
    </form>
  );
}
