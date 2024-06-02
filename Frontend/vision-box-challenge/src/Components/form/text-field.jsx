import { useContext } from "react"
import { FormContext } from "./form-context"
import { VerticalStack } from "../vertical-stack";

import styles from "./form.module.css";

export const TextField = ({placeholder, label, required, id, value, onChange}) => {
    const ctx = useContext(FormContext);

    if(ctx === null){
        return <span>Ocorreu um erro...</span>
    }

    return (
        <VerticalStack gap={"10px"}>
            <label for={id}>
                {label}
            </label>
            <input className={styles.text_box} type="text" placeholder={placeholder} required={required} value={value} onChange={onChange} from={ctx.form} id={id}/>
        </VerticalStack>
    );
}