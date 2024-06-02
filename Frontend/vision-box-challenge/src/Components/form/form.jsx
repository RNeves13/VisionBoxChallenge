import { FormContext } from "./form-context"

export const Form = ({children, onSubmit, id}) => {
    const ctx = {form: id};

    return (
        <form onSubmit={onSubmit} id={id}>
            <FormContext.Provider value={ctx}>
                {children}
            </FormContext.Provider>
        </form>
    )

}