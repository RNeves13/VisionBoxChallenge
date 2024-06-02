import { HorizontalStack } from "../horizontal-stack";

import styles from "./main-list.module.css";

export const MainListHeader = ({className, children}) => {
    const css = `${className} ${styles.header}`;
    return <HorizontalStack className={css.trim()} gap={"30px"} justifyContent="center">
        {children}
    </HorizontalStack>
}