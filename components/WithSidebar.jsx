export default function WithSidebar({ children, active }) {
  return (
    <div className="flex flex-row min-h-screen">
      <div className="bg-CITLDarkBlue text-gray-100 flex flex-col justify-between w-64">
        <div className="flex flex-col  font font-semibold">
          <a
            href="/"
            className={`px-4 py-2 hover:bg-gray-700 ${
              active === "myIMs" ? "bg-white text-gray-900" : ""
            }`}
          >
            My IMs
          </a>
          <a
            href="/college"
            className={`px-4 py-2 hover:bg-gray-700 ${
              active === "colleges" ? "bg-white text-gray-900" : ""
            }`}
          >
            Colleges
          </a>

          <a href="#" className="px-4 py-2 hover:bg-gray-700">
            Contact
          </a>
        </div>
        <div className="px-4 pb-5 ">
          <a href="#" className="text-sm hover:text-gray-500">
            Privacy Policy
          </a>
          <a href="#" className="text-sm hover:text-gray-500">
            Terms of Service
          </a>
        </div>
      </div>
      <div className="flex-1 flex flex-col">
        {/* <h1 className="text-2xl font-bold">Content Area</h1> */}
        {children}
      </div>
    </div>
  );
}
