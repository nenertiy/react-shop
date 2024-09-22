import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "calc(100vh - 110px - 105px" }}>
        <Outlet />
      </div>
      {/* <Outlet /> */}
      <Footer />
    </>
  );
};

export default Layout;
