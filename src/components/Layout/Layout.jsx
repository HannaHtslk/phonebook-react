import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";
import s from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Outlet />
      {children}
    </div>
  );
};

export default Layout;
