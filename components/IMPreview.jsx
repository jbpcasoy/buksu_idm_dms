export default function IMPreview({ iM }) {
  return (
    <>
      {process.env.NODE_ENV === "production" && iM && (
        <iframe
          src={`https://docs.google.com/gview?url=${process.env.NEXT_PUBLIC_HOST_URL}/api/download/file/${iM?.ActiveFile?.File.fileName}&embedded=true`}
          className='w-full h-screen'
        />
      )}
      {process.env.NODE_ENV !== "production" && iM && (
        <iframe
          src={`${process.env.NEXT_PUBLIC_HOST_URL}/api/download/file/${iM?.ActiveFile?.File.fileName}`}
          className='w-full h-screen'
        />
      )}
    </>
  );
}
