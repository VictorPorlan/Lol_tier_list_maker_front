import axios from "axios";
import { ISkin } from "../interfaces/skin.interface";
export class SkinGateway {
    async getChampSkins(id: number): Promise<ISkin[]> {
        const response = await axios.get(`http://localhost:3001/skin/champ/${id}`)
        return response.data
    }
    async getAllDefault(): Promise<ISkin[]>{
        const response = await axios.get(`http://localhost:3001/skin/all/default`)
        return response.data
    }

    async getAll(): Promise<ISkin[]>{
        const response = await axios.get(`http://localhost:3001/skin`)
        return response.data
    }

    async getAllFemales(): Promise<ISkin[]>{
        const response = await axios.get(`http://localhost:3001/skin/all/female`)
        return response.data
    }

    async getAllMales(): Promise<ISkin[]>{
        const response = await axios.get(`http://localhost:3001/skin/all/male`)
        return response.data
    }

    async getAllDefaultFemales(): Promise<ISkin[]>{
        const response = await axios.get(`http://localhost:3001/skin/all/default/female`)
        return response.data
    }

    async getAllDefaultMales(): Promise<ISkin[]>{
        const response = await axios.get(`http://localhost:3001/skin/all/default/male`)
        return response.data
    }
}