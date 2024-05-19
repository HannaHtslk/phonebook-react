import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

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
