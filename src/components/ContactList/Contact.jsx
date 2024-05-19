import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import s from "./Contact.module.css";
import { useDispatch, useSelector } from "react-redux";

import { deleteContactsThunk } from "../../redux/contactsOps";
import { selectIsLoading } from "../../redux/contactsSlice";
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
        <button
          className={s.deleteButton}
          type="button"
          onClick={() => dispatch(deleteContactsThunk(item.id))}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
