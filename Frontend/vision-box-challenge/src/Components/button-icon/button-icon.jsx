import styles from "./button-icon.module.css";

export const ButtonIcon = ({onClick, children}) => {
    return <button onClick={onClick} className={styles.bt_icon}>{children}</button>
}