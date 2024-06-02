import { ArrowClockwise, Plus } from "@phosphor-icons/react";
import { useGetRequest } from "../../Hooks";
import { useNavigate } from "react-router-dom"; 
import {ButtonIcon, HorizontalStack, MainList, MainListItem, MainListHeader} from "../../Components";

import styles from "./home.module.css";
import { useCallback } from "react";

const getPeopleLink = "https://localhost:7127/api/People"

function getEmptyText(data, error){
    if(error) return "Ocorreu um erro! Tente mais tarde!";

    const peopleLoaded = data !== null && data !== undefined;
    
   return peopleLoaded ? "Sem pessoas a apresentar" : "A carregar pessoas"
}

export const Home = () => {

    const {data, triggerRequest, error} = useGetRequest(getPeopleLink, 30000);

    const emptyText = getEmptyText(data, error);
    const hasPeople = data && data.length > 0;

    const navigate = useNavigate();

    const handleRefreshClick = useCallback(() => {
        triggerRequest();
    }, [triggerRequest]);

    const handleNewClick = useCallback(() => {
        navigate("/add");
    }, [navigate]);

    return (
        <>
            <HorizontalStack>
                <h1>Lista de pessoas</h1>
                <HorizontalStack className={styles.topButtons}>
                    <ButtonIcon onClick={handleRefreshClick}><ArrowClockwise size={16}/></ButtonIcon>
                    <ButtonIcon onClick={handleNewClick}><Plus size={16}/></ButtonIcon>
                </HorizontalStack>
            </HorizontalStack>
            <div>
                {
                    hasPeople ? 
                    ( <MainList> 
                        <MainListHeader className={styles.even}>
                            <p className={styles.name}>Nome</p>
                            <p className={styles.email}>Email</p>
                            <p className={styles.position}>Cargo</p>
                        </MainListHeader>
                        {data.map((p, i) => {
                            const className = i % 2 ? "even" : "odd";
                            return (
                                <MainListItem key={p.id} className={styles[className]}>
                                    <p className={styles.name}>{p.name}</p>
                                    <p className={styles.email}>{p.email}</p>
                                    <p className={styles.position}>{p.position}</p>
                                </MainListItem>
                            )
                        })}
                    </MainList> )
                    : <p className={styles.empty}>{emptyText}</p>
                }
            </div>
        </>
    );
}