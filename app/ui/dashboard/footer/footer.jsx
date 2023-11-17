import styles from "./footer.module.css"
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        CrocoDev
      </div>
        <div className={styles.text}>
             © 2023. All Rights Reserved.
        </div>
    </div>
  )
}

export default Footer