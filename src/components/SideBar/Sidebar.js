import { IoHome, IoPaperPlane, IoCheckmarkDone } from 'react-icons/io5'
import accountsIcon from '../Icons/accountsIcon.svg'
import customersIcon from '../Icons/customersIcon.svg'
import disputesIcon from '../Icons/disputesIcon.svg'
import offersIcon from '../Icons/offersIcon.svg'
import refundsIcon from '../Icons/refundsIcon.svg'
import rewardsIcon from '../Icons/rewardsIcon.svg'
import settingsIcon from '../Icons/settingsIcon.svg'
import transactionsIcon from '../Icons/transactionsIcon.svg'
import SidebarItem from './SidebarItem'
import styles from './Sidebar.module.css'

const SIDEBAR_ITEMS = [
  { text: 'Home', color: '#53B9EA', icon: IoHome, special: true },
  { text: 'Transactions', color: '#F05050', icon: transactionsIcon, special: true },
  { text: 'Subscription Plans', color: '#F19A5E', icon: IoPaperPlane, special: false },
  { text: 'Settlement', color: '#27C24C', icon: IoCheckmarkDone, special: false },
  { text: 'Disputes', color: '#F05050', icon: disputesIcon, special: false },
  { text: 'Refunds', color: '#27C24B', icon: refundsIcon, special: false },
  { text: 'Customers', color: '#FBE165', icon: customersIcon, special: false },
  { text: 'Offers', color: '#27C24C', icon: offersIcon, special: false },
  { text: 'Reward Points', color: '#F05050', icon: rewardsIcon, special: false },
  { text: 'My Account', color: '#53B9EA', icon: accountsIcon, special: false },
  { text: 'Settings', color: '#FBE165', icon: settingsIcon, special: false },
]

const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <h1 className={styles.heading}>Subspace.</h1>
      <ul className={styles.list}>
        {SIDEBAR_ITEMS.map((item, idx) => (
          <SidebarItem key={`item-${idx}`} {...item} />
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
