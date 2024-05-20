import s from "./UserMenu.module.css";
const UserMenu = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Welcome, user</h2>
      <button className={s.btn}>Logout</button>
    </div>
  );
};

export default UserMenu;
