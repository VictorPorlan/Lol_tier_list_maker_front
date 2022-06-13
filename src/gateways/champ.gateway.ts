import axios from "axios";
export class ChampGateway {
    async getChamp() {
        const response = await axios.get(`http://localhost:3001/champ`)
        return response.data
    }
    
}