import Button from '../../UI/Button'
import Table from '../../UI/Table'
import styles from './Customers.module.css'

const CUSTOMER_DATA = {
  headers: ['Customer Id', 'Customer Name', 'Email', 'Contact'],
  data: {
    row_1: ['pay_G11ZY646x6Afk3', 'Anonymous', 'abc@gmail.com', '+919876543210'],
    row_2: ['pay_G11ZY646x6Afk3', 'Anonymous', 'abc@gmail.com', '+919876543210'],
    row_3: ['pay_G11ZY646x6Afk3', 'Anonymous', 'abc@gmail.com', '+919876543210'],
    row_4: ['pay_G11ZY646x6Afk3', 'Anonymous', 'abc@gmail.com', '+919876543210'],
    row_5: ['pay_G11ZY646x6Afk3', 'Anonymous', 'abc@gmail.com', '+919876543210'],
    row_6: ['pay_G11ZY646x6Afk3', 'Anonymous', 'abc@gmail.com', '+919876543210'],
  },
}

const Customers = () => {
  return (
    <div className={styles.Customers}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.heading}>Customer</div>
          <div className={styles.button}>
            <Button text="+ New Customer" />
          </div>
        </div>
        <div className={styles.spacer} />
        <div className={styles.table}>
          <Table data={CUSTOMER_DATA} />
        </div>
      </div>
    </div>
  )
}

export default Customers
