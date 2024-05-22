import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";
import { useId } from "react";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const LoginForm = () => {
  const emailFieldId = useId();
  const passwordFieldId = useId();

  const dispatch = useDispatch();

  const FeedbackSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string()
      .min(8, "Must be at least 8 characters!")
      .max(20, "Up to 20 characters!")
      .required("Required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };
  const handleSubmit = (values, actions) => {
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => actions.resetForm())
      .catch(() => toast.error("Credentials are not valid"));
  };
  return (
    <div>
      <div className={s.container}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={FeedbackSchema}
        >
          <Form className={s.form}>
            <div className={s.wrapper}>
              <label htmlFor={emailFieldId}>Email</label>
              <Field
                className={s.input}
                type="email"
                name="email"
                id={emailFieldId}
              />
              <ErrorMessage className={s.error} name="email" component="span" />
            </div>
            <div className={s.wrapper}>
              <label htmlFor={passwordFieldId}>Password</label>
              <Field
                className={s.input}
                type="text"
                name="password"
                id={passwordFieldId}
              />
              <ErrorMessage
                className={s.error}
                name="password"
                component="span"
              />
            </div>
            <div className={s.login}>
              <p>Do not have an account? </p>
              <NavLink className={s.link} to="/register">
                Register
              </NavLink>
            </div>

            <button className={s.btn} type="submit">
              Log in
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
