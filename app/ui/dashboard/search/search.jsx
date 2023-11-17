import styles from './search.module.css'
import { MdSearch } from 'react-icons/md'
const Search = ({placeholder}) => {
  return (
    <div className={styles.container}>
        <MdSearch />
        <input className={styles.input} placeholder={placeholder} />
    </div>
  )
}

export default Search