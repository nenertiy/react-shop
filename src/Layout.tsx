import { Outlet } from "react-router-dom";
import Header from "./components/ui/Header/Header";
import Footer from "./components/ui/Footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "calc(100vh - 170px - 105px" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
