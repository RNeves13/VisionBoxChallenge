import { useContext } from "react";
import { FormContext } from "./form-context";

import styles from "./form.module.css";

export const SubmitButton = ({children}) => {
    const ctx = useContext(FormContext);

    if(ctx === null){
        return <span>Ocorreu um erro...</span>
    }


    return (
        <button className={styles.bt} type="submit" form={ctx.form}>{children}</button>
    )
}