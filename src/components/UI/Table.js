import styles from './Table.module.css'

const Table = (props) => {
  const TABLE_DATA = props.data

  const tableHeader = (
    <tr className={`${styles['table-row']} ${styles['table-head']}`}>
      {TABLE_DATA.headers.map((header, idx) => (
        <th key={`header_${idx}`} className={styles['table-header']}>
          {header}
        </th>
      ))}
    </tr>
  )

  const tableBody = Object.keys(TABLE_DATA.data).map((rowNo, idx) => (
    <tr key={`${rowNo}`} className={`${styles['table-row']} ${styles['table-body']}`}>
      {TABLE_DATA.data[rowNo].map((colVal, idx) => (
        <td key={`data_${rowNo}_c${idx}`} className={styles['table-data']}>
          {colVal}
        </td>
      ))}
    </tr>
  ))

  return (
    <table className={styles.Table}>
      <thead>{tableHeader}</thead>
      <tbody>{tableBody}</tbody>
    </table>
  )
}

export default Table
