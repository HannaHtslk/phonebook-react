import s from "./EditContact.module.css";
import { useId } from "react";
import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { editContactsThunk } from "../../redux/contacts/contactsOps";

const EditContact = ({ closeModal, contacts }) => {
  const namelFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

  const initialValues = {
    name: contacts.name,
    number: contacts.number,
  };

  const handleSubmit = (values) => {
    const updatedContact = { ...contacts, ...values };

    dispatch(editContactsThunk(updatedContact));
    closeModal();
  };
  return (
    <div className={s.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <div className={s.wrapper}>
            <label htmlFor={namelFieldId}>Name</label>
            <Field
              className={s.input}
              type="text"
              name="name"
              id={namelFieldId}
            />
          </div>
          <div className={s.wrapper}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field
              className={s.input}
              type="text"
              name="number"
              id={numberFieldId}
            />
          </div>
          <button className={s.deleteButton} type="submit">
            Save
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default EditContact;
