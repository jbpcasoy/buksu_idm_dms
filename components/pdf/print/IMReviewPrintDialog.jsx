import { Button, Modal } from "flowbite-react";
import React, { useRef } from "react";
import IMReview from "../IMReview";
import { useReactToPrint } from "react-to-print";

export default function IMReviewPrintDialog({
  show,
  onClose,
  printText = "Print",
  noText: closeText = "Close",
}) {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "IM Review",
  });

  return (
    <>
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
            <IMReview ref={componentRef} />
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
