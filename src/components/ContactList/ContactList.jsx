import { useSelector } from "react-redux";
import Contact from "./Contact";
import s from "./ContactList.module.css";

import { selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const filteredItems = useSelector(selectFilteredContacts);

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {filteredItems.map((item) => {
          return (
            <li className={s.item} key={item.id}>
              <Contact item={item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
