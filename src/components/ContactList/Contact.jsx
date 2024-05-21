import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import s from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";

import {
  deleteContactsThunk,
  editContactsThunk,
} from "../../redux/contacts/contactsOps";
import { selectIsLoading } from "../../redux/contacts/contactsSlice";
import Loader from "../Loader/Loader";

const Contact = ({ item }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading && <Loader />}
      <div className={s.container}>
        <div>
          <p className={s.text}>
            <FaUser className={s.icon} />
            {item.name}
          </p>
          <p className={s.text}>
            <FaPhone className={s.icon} />
            {item.number}
          </p>
        </div>
        <div className={s.btnWrapper}>
          <button
            className={s.deleteButton}
            type="button"
            onClick={() => dispatch(deleteContactsThunk(item.id))}
          >
            Delete
          </button>
          <button
            type="button"
            className={s.deleteButton}
            onClick={() => dispatch(editContactsThunk(item.id))}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
