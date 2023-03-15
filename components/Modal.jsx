import { Fragment } from "react";

function Modal({ isOpen, onClose, children }) {
  const modalClass = isOpen ? "block" : "hidden";

  return (
    <Fragment>
      <div
        className={`${modalClass} fixed z-1000 inset-0 overflow-y-auto`}
        aria-labelledby='modal-title'
        role='dialog'
        aria-modal='true'
      >
        <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <div
            className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
            aria-hidden='true'
            onClick={onClose}
          ></div>

          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          ></span>

          <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
            {children}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Modal;
