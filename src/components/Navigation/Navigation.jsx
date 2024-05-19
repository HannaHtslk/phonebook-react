import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = false;
  const activeClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <nav className={s.container}>
      <NavLink to="/" className={activeClass}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" className={activeClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
