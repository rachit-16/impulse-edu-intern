import styles from './Button.module.css'

const Button = (props) => {
  return <button className={styles.Button}>{props.text}</button>
}

export default Button
