import { Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";
import { useId } from "react";

const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <div>
      <div className={s.container}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form className={s.form}>
            <label htmlFor={emailFieldId}>Email</label>
            <Field
              className={s.input}
              type="email"
              name="email"
              id={emailFieldId}
            />
            <label htmlFor={passwordFieldId}>Password</label>
            <Field
              className={s.input}
              type="text"
              name="password"
              id={passwordFieldId}
            />
            <button className={s.btn} type="submit">
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
