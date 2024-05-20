import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useId } from "react";

import s from "./ContactForm.module.css";
import { ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading } from "../../redux/contacts/contactsSlice";
import Loader from "../../components/Loader/Loader";
import { addContactsThunk } from "../../redux/contacts/contactsOps";

const ContactForm = () => {
  const dispatch = useDispatch();

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, actions) => {
    dispatch(addContactsThunk(values));

    actions.resetForm();
  };

  const nameId = useId();
  const phoneId = useId();

  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading && <Loader />}
      <Formik
        initialValues={{ name: "", number: "" }}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
      >
        <Form className={s.container}>
          <div>
            <label htmlFor={nameId}>Name</label>
            <Field
              className={s.input}
              type="text"
              name="name"
              id={nameId}
            ></Field>
            <ErrorMessage name="name" component="span" className={s.error} />
          </div>

          <div>
            <label htmlFor={phoneId}>Number</label>
            <Field
              className={s.input}
              type="text"
              name="number"
              id={phoneId}
            ></Field>
            <ErrorMessage name="number" component="span" className={s.error} />
          </div>

          <button className={s.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
