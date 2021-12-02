import userHeaderIcon from '../Icons/userHeaderIcon.svg'
import styles from './UserHeader.module.css'

const UserHeader = () => {
  return (
    <div className={styles.UserHeader}>
      <img className={styles.icon} src={userHeaderIcon} alt="user icon" />
      <div className={styles.text}>Groww90</div>
    </div>
  )
}

export default UserHeader
