import { IconContext } from 'react-icons/lib'
import { MdModeEdit } from 'react-icons/md'
import styles from './DetailCard.module.css'

const DetailCard = (props) => {
  // console.log(props.details)
  // <div key="row" className={styles['detail-row']}>
  //       <div className={styles.key}>Contact Number</div>
  //       <div className={styles.value}>
  //         {/* <div className={styles.text}>{props.details['Contact Number'].value}</div> */}
  //         <span className={styles.text}>{props.details['Contact Number'].value}</span>
  //         {/* <span className={styles.edit}> */}
  //         <IconContext.Provider value={{ className: `${styles['edit-icon']} ${styles.edit}` }}>
  //           <MdModeEdit />
  //         </IconContext.Provider>
  //         {/* </span> */}
  //       </div>
  //     </div>
  const cardData = Object.keys(props.details).map((key, idx) => {
    const data = props.details[key]
    return (
      <div key={`${props.title}_${idx}`} className={styles['detail-row']}>
        <div className={styles.key}>
          {key}
          {props.title === 'merchant' && data.heading && <strong>: {data.value}</strong>}
        </div>

        <div className={styles.value}>
          {data.heading && <span className={`${styles.text} ${styles.edit}`}>{data.controlText}</span>}
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
