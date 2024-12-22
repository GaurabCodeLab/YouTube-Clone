import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const DashboardLayout = () => {
  const show = useSelector((store) => store.toggleReducer.show);
  return (
    <>
      <Header />
      <div className="flex gap-10 ps-6">
        {show && <Sidebar />}
        <Outlet />
      </div>
    </>
  );
};

export default DashboardLayout;
