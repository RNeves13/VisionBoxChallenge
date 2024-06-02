import axios from "axios";

export function getStatusBaseValue(status){
    return Math.floor(status/100);
}

export async function postRequest(link, params){
    let response = null;
    try {
        response = await axios.post(link, params)
        return response.status
    } catch(e){
        return e.response.status;
    }

}