import { NavLink } from "react-router-dom";
import s from "./UserMenu.module.css";
import { clsx } from "clsx";
const UserMenu = () => {
  const activeClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  return (
    <div className={s.wrapper}>
      <NavLink to="/contacts" className={activeClass}>
        Contacts
      </NavLink>
      <h2 className={s.title}>Welcome, user</h2>
      <button className={s.btn}>Logout</button>
    </div>
  );
};

export default UserMenu;
