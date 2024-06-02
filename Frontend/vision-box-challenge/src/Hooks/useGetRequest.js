import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const useGetRequest = (link) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [trigger, setTrigger] = useState(null);

    const triggerRequest = useCallback(() => {
         setTrigger(prev => !prev);
    }, []);

    useEffect(() => {

        async function fetchData(){
            try{
                const response = await axios.get(link);
                setData(response.data);
                setError(false);
            } catch(e) {
                console.error(e);
                setData(null);
                setError(true);
            }
        }
        
        fetchData();

    }, [trigger, link]);

    return {data, triggerRequest, error};
}