import axios from "axios";
import { ISkin } from "../interfaces/skin.interface";

export class SkinGateway {

    async getChampSkins(list: string, id: number): Promise<ISkin[]> {
        const response = await axios.get(process.env.REACT_APP_API_URI +`champ/${id}/${list}`)
        return response.data
    }
    async getAllDefault(list: string): Promise<ISkin[]>{
        const response = await axios.get(process.env.REACT_APP_API_URI +`skin/all/default/noGender/${list}`)
        return response.data
    }

    async getAll(list: string): Promise<ISkin[]>{
        const response = await axios.get(process.env.REACT_APP_API_URI +`skin/all/${list}`)
        return response.data
    }

    async getAllFemales(list: string): Promise<ISkin[]>{
        const response = await axios.get(process.env.REACT_APP_API_URI +`skin/all/female/${list}`)
        return response.data
    }

    async getAllMales(list: string): Promise<ISkin[]>{
        const response = await axios.get(process.env.REACT_APP_API_URI +`skin/all/male/${list}`)
        return response.data
    }

    async getAllDefaultFemales(list: string): Promise<ISkin[]>{
        const response = await axios.get(process.env.REACT_APP_API_URI +`skin/all/default/female/${list}`)
        return response.data
    }

    async getAllDefaultMales(list: string): Promise<ISkin[]>{
        const response = await axios.get(process.env.REACT_APP_API_URI +`skin/all/default/male/${list}`)
        return response.data
    }
}