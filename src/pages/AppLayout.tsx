import { Outlet } from "react-router-dom";
import Header from "./Header";
// import Footer from "./Footer";

function AppLayout() {
  return (
    <div className='w-full h-full'>
      <Header />
      <main className='mx-5'>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default AppLayout;
