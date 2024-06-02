import { HorizontalStack } from "../horizontal-stack";
import styles from "./main-list.module.css";

export const MainListItem = ({className, children}) => {
    const css = `${className} ${styles.container}`;

    return(
        <HorizontalStack className={css.trim()} gap={"30px"} justifyContent="center">
           {children}
        </HorizontalStack>
    )
}