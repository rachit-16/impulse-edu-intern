import { IconContext } from 'react-icons/lib'
import { FiSearch } from 'react-icons/fi'
import { CgMenuGridO } from 'react-icons/cg'
import Notification from './Notification'
import UserHeader from './UserHeader'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.heading}>Dashboard</div>
      <div className={styles.controls}>
        <IconContext.Provider value={{ className: styles.icon }}>
          <FiSearch />
          <CgMenuGridO />
        </IconContext.Provider>
        <Notification />
        <UserHeader />
      </div>
    </div>
  )
}

export default Header
