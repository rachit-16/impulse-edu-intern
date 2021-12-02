import { IconContext } from 'react-icons/lib'
import { MdModeEdit } from 'react-icons/md'
import styles from './DetailCard.module.css'

const DetailCard = (props) => {
  const cardData = Object.keys(props.details).map((key, idx) => {
    const data = props.details[key]
    return (
      <div key={`${props.title}_${idx}`} className={styles['detail-row']}>
        <div className={styles.key}>
          {key}
          {props.title === 'merchant' && data.heading && <strong>: {data.value}</strong>}
        </div>

        <div className={styles.value}>
          {data.heading && (
            <span className={`${styles.text} ${styles.edit}`}>{data.controlText}</span>
          )}
          {!data.heading && <span className={styles.text}>{data.value}</span>}
          <IconContext.Provider value={{ className: `${styles['edit-icon']} ${styles.edit}` }}>
            {data.edit && <MdModeEdit />}
          </IconContext.Provider>
        </div>
      </div>
    )
  })

  return <div className={styles.DetailCard}>{cardData}</div>
}

export default DetailCard
