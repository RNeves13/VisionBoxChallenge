import { VerticalStack } from "../vertical-stack";

import styles from "./main-list.module.css";

export const MainList = ({children}) => {
    return (
        <VerticalStack className={styles.list}>
            {children}
        </VerticalStack>
    )
} 