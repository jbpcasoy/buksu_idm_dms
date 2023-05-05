import { Button, Modal } from "flowbite-react";

export default function ConfirmModal({
  show,
  onClose,
  onAgree,
  message = "Are you sure? This action cannot be undone.",
  yesText = "Yes, I'm sure",
  noText = "No, cancel",
}) {
  return (
    <>
      <Modal
        show={show}
        size='md'
        popup={true}
        onClose={onClose}
        position='center'
        className='z-70'
      >
        <Modal.Header />
        <Modal.Body>
          <div className='text-center'>
            <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
              {message}
            </h3>
            <div className='flex justify-center gap-4'>
              <Button
                color='failure'
                onClick={() => {
                  onAgree().then((res) => {
                    onClose();
                  });
                }}
              >
                {yesText}
              </Button>
              <Button color='gray' onClick={onClose}>
                {noText}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
