import { NavLink } from "react-router-dom";
import s from "./AuthNav.module.css";
import { clsx } from "clsx";

const AuthNav = () => {
  const activeClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div className={s.container}>
      <NavLink className={activeClass} to="/register">
        Register
      </NavLink>
      <NavLink className={activeClass} to="/login">
        Log in
      </NavLink>
    </div>
  );
};

export default AuthNav;
