import s from "./EditContact.module.css";
import { useId } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { editContactsThunk } from "../../redux/contacts/contactsOps";

const EditContact = () => {
  const namelFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };
  const handleSubmit = (values, actions) => {
    dispatch(editContactsThunk(values));
    actions.resetForm();
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
            <ErrorMessage className={s.error} name="name" component="span" />
          </div>
          <div className={s.wrapper}>
            <label htmlFor={numberFieldId}>Number</label>
            <Field
              className={s.input}
              type="text"
              name="password"
              id={numberFieldId}
            />
            <ErrorMessage
              className={s.error}
              name="password"
              component="span"
            />
          </div>
          <button className={s.btn} type="submit">
            Save
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default EditContact;
