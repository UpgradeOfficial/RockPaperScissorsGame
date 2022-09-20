import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import PublicHeader from "./PublicHeader";

const Layout = () => {
  return (
    <>
      <PublicHeader />
      <div>
        <Outlet />
      </div>
      <Footer/>
    </>
  );
};
export default Layout;
