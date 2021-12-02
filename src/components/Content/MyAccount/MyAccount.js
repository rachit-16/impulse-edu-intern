import DetailCard from './DetailCard'
import { MERCHANT_DETAILS, SUPPORT_DETAILS, BANK_DETAILS } from './Details'
import styles from './MyAccount.module.css'

const MyAccount = () => {
  return (
    <div className={styles.MyAccount}>
      <div className={styles.container}>
        <div className={styles.details}>
          <DetailCard details={MERCHANT_DETAILS} title="merchant" />
        </div>
        <div className={styles.details}>
          <DetailCard details={SUPPORT_DETAILS} />
        </div>
        <div className={styles.details}>
          <DetailCard details={BANK_DETAILS} />
        </div>
      </div>
    </div>
  )
}

export default MyAccount
