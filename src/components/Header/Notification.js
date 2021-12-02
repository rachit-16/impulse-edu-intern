import { IconContext } from 'react-icons/lib'
import { RiNotificationFill } from 'react-icons/ri'
import styles from './Notification.module.css'

const Notification = () => {
  return (
    <IconContext.Provider value={{ className: styles.icon }}>
      <div className={styles.Notification}>
        <RiNotificationFill />
        <div className={styles.count}>15</div>
      </div>
    </IconContext.Provider>
  )
}

export default Notification
