import axios from "axios";
export class TierGateway {
    async checkList(name:string) {
        const response = await axios.get(`http://localhost:3001/skin-tier/check/${name}`)
        return response.data
    }
    async setTier(name:string, skinId: number, tier: string) {
        const response = await axios.get(`http://localhost:3001/skin-tier/setTier/${name}/${skinId}/${tier}`)
        return response.data
    }
}