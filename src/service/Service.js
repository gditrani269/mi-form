import axios from "axios"

export const findAll = async () => {
    try {
        const response = await axios.get ('http://localhost:8080/users');
        console.log (response.data);
        console.log (response.data.ALUA.valor);
        return response;
    } catch {
        console.log (error);
    }
    return null;
}