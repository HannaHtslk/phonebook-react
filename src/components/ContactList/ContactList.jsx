import { useSelector } from "react-redux";
import Contact from "./Contact";
import s from "./ContactList.module.css";

import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { useState } from "react";
import Modal from "../Modal/Modal";
import EditContact from "../EditContact/EditContact";

const ContactList = () => {
  const filteredItems = useSelector(selectFilteredContacts);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const openEl = (contact) => {
    console.log(contact);
    setEditedData(contact);
    openModal();
  };

  const [editedData, setEditedData] = useState(null);

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {filteredItems.map((item) => {
          return (
            <li className={s.item} key={item.id}>
              <Contact openElement={openEl} item={item} />
            </li>
          );
        })}
      </ul>
      {isOpen && (
        <Modal title={editedData?.item} onClose={closeModal}>
          <EditContact closeModal={closeModal} contacts={editedData} />
        </Modal>
      )}
    </div>
  );
};

export default ContactList;
