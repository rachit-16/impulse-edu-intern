import { useEffect } from 'react'
import { IconContext } from 'react-icons/lib'
import styles from './SidebarItem.module.css'

const SidebarItem = (props) => {
  let isFunction = false
  let Icon = undefined
  if (typeof props.icon === 'function') {
    isFunction = true
    Icon = props.icon
  }

  // this logic can be refined
  useEffect(() => {
    if (window.location.pathname === '/customers') {
      document.getElementById('Customers').classList.add(styles.active)
      document.getElementById('My Account').classList.remove(styles.active)
    } else if (window.location.pathname === '/my-account') {
      document.getElementById('Customers').classList.remove(styles.active)
      document.getElementById('My Account').classList.add(styles.active)
    } else {
      document.getElementById('Customers').classList.remove(styles.active)
      document.getElementById('My Account').classList.remove(styles.active)
    }
  }, [])

  return (
    <IconContext.Provider value={{ className: styles.icon, color: props.color }}>
      <li className={styles.SidebarItem}>
        <div
          id={props.text}
          className={styles.activePeg}
          style={{ '--main-color': `${props.color}` }}
        ></div>

        <div className={styles['icon-container']}>
          {isFunction && <Icon />}
          {!isFunction && <img className={styles.icon} src={props.icon} alt="icon" />}
        </div>

        <div className={styles.text} style={{ color: props.special && props.color }}>
          {props.text}
        </div>
      </li>
    </IconContext.Provider>
  )
}

export default SidebarItem
