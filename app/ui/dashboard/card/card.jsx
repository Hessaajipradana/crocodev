import { MdSupervisedUserCircle } from 'react-icons/md'
import styles from './card.module.css'
const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Users</span>
        <span className={styles.number}>2.300</span>
        <span className={styles.detail}>
          <span className={styles.positive}>10%</span> more than preveious month
        </span>
      </div>
    </div>
  )
}

export default Card