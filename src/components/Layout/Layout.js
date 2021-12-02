import { Routes, Route } from 'react-router'
import Sidebar from '../SideBar/Sidebar'
import Header from '../Header/Header'
import Customers from '../Content/Customers/Customers'
import MyAccount from '../Content/MyAccount/MyAccount'
import styles from './Layout.module.css'

const Layout = () => {
  return (
    <div className={styles.Layout}>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.main}>
          <div className={styles.header}>
            <Header />
          </div>
          <div className={styles.content}>
            {window.location.pathname === '/' && (
              <h2>
                go to route
                <a href="/customers">'/customers'</a> or
                <a href="/my-account">'/my-account'</a>
                to see implemented pages.
              </h2>
            )}
            <Routes>
              <Route path="/customers" element={<Customers />} />
              <Route path="/my-account" element={<MyAccount />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
