import styles from "../ui/login/login.module.css";
import Image from "next/image";
import LoginForm from "../ui/login/loginForm/loginForm";
const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image
            src="/astronaut.png"
            alt="astronaut image"
            fill
            className={styles.bg}
          />
        </div>
        <div className={styles.bgContainer2}>
          <Image
            src="/astronaut.png"
            alt="astronaut image"
            fill
            className={styles.bg2}
          />
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
