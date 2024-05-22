import { TbFaceIdError } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import s from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <TbFaceIdError className={s.icon} size="100" />
        <h1 className={s.title}>Oops, such page does not exist</h1>
        <NavLink className={s.link} to="/">
          Log in
        </NavLink>
      </div>
    </div>
  );
};

export default NotFound;
