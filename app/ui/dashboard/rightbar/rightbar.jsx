import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
import Image from "next/image";
import styles from "./rightbar.module.css";
const Rightbar = () => {
  return (
    <div className={styles.container}>

      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="astronaut image" fill className={styles.bg} />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>🚀 Available Now</span>
          <h3 className={styles.title}>How To Be An Developer</h3>
          <span className={styles.subtitle}>Take 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            voluptatibus
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notification}>🔥 Read Now</span>
          <h3 className={styles.title}>Read How To Be An Developer with me Hesa </h3>
          <span className={styles.subtitle}>Take 4 minutes to learn</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            voluptatibus
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
