import WithSidebar from "@/components/WithSidebar";
import Layout from "@/views/layout/Layout";

export default function IMVersion() {
  return (
    <Layout>
      <WithSidebar>
        <div className="bg-white rounded-md p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Document.pdf</h2>
            <h2 className="text-xs uppercase font-medium">
              Version 1677046830191
            </h2>
            <div className="items-left">
              <a
                href="/im/view"
                className="text-CITLDarkBlue border border-CITLGray-main p-2 rounded hover:bg-CITLOrange"
              >
                Current Version
              </a>{" "}
              <a
                href="/"
                className="text-CITLDarkBlue border border-CITLGray-main p-2 rounded hover:bg-CITLOrange"
              >
                Download
              </a>{" "}
            </div>
          </div>
          {/* TODO change pdf url into dynamic */}
          <iframe
            src="https://docs.google.com/gview?url=https://www.africau.edu/images/default/sample.pdf&embedded=true"
            className="w-full h-screen"
          />
        </div>
      </WithSidebar>
    </Layout>
  );
}
