import WithSidebar from "@/components/WithSidebar";
import Layout from "@/views/layout/Layout";

export default function Review() {
  return (
    <Layout>
      <WithSidebar>
        <div className="bg-white rounded-md p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Document.pdf</h2>
            <a
              href="/review/form"
              className="text-CITLWhite bg-blue-500 p-2 rounded hover:bg-CITLOrange"
            >
              Review
            </a>
          </div>
          {/* TODO change pdf url into dynamic */}
          <iframe
            src="https://docs.google.com/gview?url=https://www.africau.edu/images/default/sample.pdf&embedded=true"
            className="w-full h-screen"
          />
          {/* <div className="bg-gray-200 h-64 flex items-center justify-center">
            <span className="text-gray-400 font-medium">PDF Preview</span>
          </div> */}
        </div>
      </WithSidebar>
    </Layout>
  );
}
