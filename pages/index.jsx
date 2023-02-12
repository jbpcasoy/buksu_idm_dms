import frontendCreateIM from "@/services/frontend/im/frontendCreateIM";
import uploadIMFile from "@/services/frontend/im/upload/uploadIMFile";
import AddIMModelView from "@/views/AddIMModalView";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState({
    addModalOpen: false,
  });

  return (
    <div>
      <div className='text-right'>
        <button
          className='bg-orange-500 hover:bg-orange-400 text-white font-medium py-2 px-4 rounded-lg'
          onClick={() => {
            setState((prev) => {
              return { ...prev, addModalOpen: true };
            });
          }}>
          Add
        </button>
      </div>
      {state.addModalOpen && (
        <AddIMModelView
          isOpen={state.addModalOpen}
          onClose={() => {
            setState((prev) => {
              return { ...prev, addModalOpen: false };
            });
          }}
          onSubmit={async (values) => {
            const { file, title, serialNumber } = values;
            uploadIMFile(file).then((res) => {
              const fileName = res.filename;
              return frontendCreateIM({ fileName, serialNumber, title });
            });
          }}
        />
      )}
    </div>
  );
}
