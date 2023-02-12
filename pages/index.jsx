import frontendCreateIM from "@/services/frontend/im/frontendCreateIM";
import frontendGetIMs from "@/services/frontend/im/frontendGetIMs";
import uploadIMFile from "@/services/frontend/im/upload/uploadIMFile";
import AddIMModelView from "@/views/AddIMModalView";
import IM from "@/views/im/IM";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState({
    addModalOpen: false,
    ims: [],
  });

  const router = useRouter();

  useEffect(() => {
    let subscribe = true;

    frontendGetIMs({ page: 1, limit: 10 }).then((res) => {
      if (!subscribe) return;

      setState((prev) => ({ ...prev, ims: res }));
    });

    return () => {
      subscribe = false;
    };
  }, []);

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
      <div>
        {state.ims && (
          <table>
            <thead className='font-bold'>
              <tr>
                <td>ID</td>
                <td>Serial Number</td>
                <td>Title</td>
                <td>Status</td>
                <td>Owner Name</td>
                <td>File Name</td>
                <td>Saved File Name</td>
                <td>Created At</td>
                <td>Updated At</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {state.ims.map((im) => {
                return (
                  <IM
                    createdAt={im.createdAt}
                    originalFileName={im.originalFileName}
                    fileName={im.fileName}
                    id={im.id}
                    owner={im.owner}
                    serialNumber={im.serialNumber}
                    status={im.status}
                    title={im.title}
                    updatedAt={im.updatedAt}
                    onView={() =>
                      router.push(`/api/im/download/${im.fileName}`)
                    }
                    key={im.id}
                  />
                );
              })}
            </tbody>
          </table>
        )}
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
            const originalFileName = file.name;
            uploadIMFile(file).then((res) => {
              const fileName = res.filename;
              return frontendCreateIM({
                fileName,
                serialNumber,
                title,
                originalFileName,
              });
            });
          }}
        />
      )}
    </div>
  );
}
