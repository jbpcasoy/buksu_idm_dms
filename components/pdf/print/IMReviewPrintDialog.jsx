import { sections } from "@/constants/questions";
import { Button, Modal } from "flowbite-react";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import IMReview from "../IMReview";

export default function IMReviewPrintDialog({
  printText = "Print",
  noText: closeText = "Close",
  imTitle,
  authors,
  imType,
  coordinator,
  peer,
  chairperson,
  reviewItems,
}) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "IM Review",
  });
  const [show, setShow] = useState(false);

  function onClose() {
    setShow(false);
  }

  console.log({ peer });

  return (
    <>
      <button
        onClick={() => setShow((prev) => ({ ...prev, openPrint: true }))}
        type='button'
        class='text-CITLDarkBlue bg-white hover:bg-CITLDarkBlue hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          class='w-6 h-6'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z'
          />
        </svg>
      </button>
      <Modal
        show={show}
        size='5xl'
        popup={true}
        onClose={onClose}
        position='center'
        className='z-70'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <IMReview
              ref={componentRef}
              imTitle={imTitle}
              authors={authors}
              imType={imType}
              sections={sections}
              coordinator={coordinator}
              peer={peer}
              chairperson={chairperson}
              reviewItems={reviewItems}
            />
            <div className='flex justify-center gap-4'>
              <Button color='success' onClick={handlePrint}>
                {printText}
              </Button>
              <Button color='gray' onClick={onClose}>
                {closeText}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
