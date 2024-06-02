import { useCallback, useState } from "react"
import { ButtonIcon, EmailField, Form, HorizontalStack, SubmitButton, TextField, VerticalStack } from "../../Components"
import { ArrowLeft, FloppyDisk } from "@phosphor-icons/react"
import { getStatusBaseValue, postRequest } from "../../Common/post-request";

import styles from "./new-person.module.css";
import { useNavigate } from "react-router-dom";

const postPersonLink = "https://localhost:7127/api/People";

export const NewPerson = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleNameChange = useCallback((e) => {
        setName(e.target.value)
    }, []);

    const handleEmailChange = useCallback((e) => {
        setEmail(e.target.value)
    }, []);

    const handlePositionChange = useCallback((e) => {
        setPosition(e.target.value)
    }, []);

    const handleFormSubmit = useCallback(async (e) => {
        e.preventDefault();
        setMessage("");
        setError(false);

        const status = await postRequest(postPersonLink, {name, email, position});

        const baseStatus = getStatusBaseValue(status);
    
        switch(baseStatus) {
            case 4:
                setError(true);
                setMessage("Ocorreu um erro com o pedido...");
                break;
            case 5:
                setError(true);
                setMessage("Ocorreu um erro no servidor, tente mais tarde");
                break;
            default:
                setMessage("Pessoa adicionada com sucesso");
                setEmail("");
                setName("");
                setPosition("");
        }

    }, [email, name, position]);

    // navigate changes every render, no need to memo
    const handleBackClick = () => {
        setMessage("");
        setError(false);
        setEmail("");
        setName("");
        setPosition("");
        navigate("/");
    };

    return (
        <>
            <HorizontalStack>
                <h1>Adicionar Pessoa</h1>
                <ButtonIcon onClick={handleBackClick}>
                    <ArrowLeft size={16} />
                </ButtonIcon>
            </HorizontalStack>
            <Form id="new-form" onSubmit={handleFormSubmit}>
                <VerticalStack gap={"32px"}>
                    <TextField placeholder="Insira o nome" label="Nome" id={"name"} value={name}  onChange={handleNameChange} required/>
                    <EmailField required id={"email"} value={email} onChange={handleEmailChange}/>
                    <TextField placeholder="Insira o cargo" label="Cargo" value={position} id={"position"} onChange={handlePositionChange} required/>
                    <SubmitButton><FloppyDisk size={16} /></SubmitButton>
                </VerticalStack>
            </Form>
            {
                message ? <p className={error ? styles.error : styles.success}>{message}</p> : null
            }
        </>
    )
}