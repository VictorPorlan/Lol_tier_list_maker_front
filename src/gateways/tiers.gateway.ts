import axios from "axios";
export class TierGateway {
    async checkList(name:string) {
        console.log(process.env.REACT_APP_API_URI)
        const response = await axios.get(process.env.REACT_APP_API_URI +`skin-tier/check/${name}`)
        return response.data
    }
    async setTier(listName:string, skinId: number, tier: number) {
        const response = await axios.post(process.env.REACT_APP_API_URI +`skin-tier/setTier`, {listName, skinId, tier})
        return response.data
    }
}