import { useContext } from "react"
import { FormContext } from "./form-context"
import { VerticalStack } from "../vertical-stack";

import styles from "./form.module.css";

export const EmailField = ({required, id, value, onChange}) => {
    const ctx = useContext(FormContext);

    if(ctx === null){
        return <span>Ocorreu um erro...</span>
    }

    return (
        <VerticalStack gap={"20px"}>
            <label for={id}>
                Email
            </label>
            <input className={styles.text_box} type="email" placeholder={"Insira o email"} required={required} value={value} from={ctx.form} onChange={onChange} id={id}/>
        </VerticalStack>
    );
}