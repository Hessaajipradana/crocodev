"use client";
import { authenticate } from "../../../lib/actions";
import styles from "./loginForm.module.css";
import { useFormState } from "react-dom";


const LoginForm = () => {
  const [message, formAction] = useFormState(authenticate, undefined);

  return (
    <form action={formAction} className={styles.form}>
      <input type="text" name="username" id="username" placeholder="username" />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
      />
      <button className={styles.button}>login</button>
      {message && message}
    </form>
  );
};

export default LoginForm;
