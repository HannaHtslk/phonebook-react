import s from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Welcome <br />
        to Phonebook
      </h1>
    </div>
  );
};

export default HomePage;
