import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className='m-2'>{children}</div>
    </div>
  );
}
