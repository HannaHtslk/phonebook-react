import clsx from "clsx";
import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/slice";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
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
