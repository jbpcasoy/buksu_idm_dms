import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children, active }) {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className=' sm:ml-64'>
        <div className='p-2'>
          <div className=' mt-16'>{children}</div>
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
}
