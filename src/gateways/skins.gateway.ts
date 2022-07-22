import axios from "axios";
import { ISkin } from "../interfaces/skin.interface";

export class SkinGateway {

    async getChampSkins(list: string, id: number): Promise<ISkin[]> {
        const response = await axios.get(`http://localhost:3001/skin/champ/${id}/${list}`)
        return response.data
    }
    async getAllDefault(list: string): Promise<ISkin[]>{
        const response = await axios.get(`http://localhost:3001/skin/all/default/noGender/${list}`)
        return response.data
    }

    async getAll(list: string): Promise<ISkin[]>{
        const response = await axios.get(`http://localhost:3001/skin/all/${list}`)
        return response.data
    }

    async getAllFemales(list: string): Promise<ISkin[]>{
        const response = await axios.get(`http://localhost:3001/skin/all/female/${list}`)
        return response.data
    }

    async getAllMales(list: string): Promise<ISkin[]>{
        const response = await axios.get(`http://localhost:3001/skin/all/male/${list}`)
        return response.data
    }

    async getAllDefaultFemales(list: string): Promise<ISkin[]>{
        const response = await axios.get(`http://localhost:3001/skin/all/default/female/${list}`)
        return response.data
    }

    async getAllDefaultMales(list: string): Promise<ISkin[]>{
        const response = await axios.get(`http://localhost:3001/skin/all/default/male/${list}`)
        return response.data
    }
}