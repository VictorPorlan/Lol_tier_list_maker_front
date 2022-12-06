import axios from "axios";
export class ChampGateway {
    async getChamp() {
        const response = await axios.get(process.env.REACT_APP_API_URI + `champ`)
        return response.data
    }
    
}