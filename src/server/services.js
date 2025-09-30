//client imports
import { axiosInstance } from "./config.axios";

export async function getAllInventory_API(limit=10,page=1,){
    const {data} = await axiosInstance.get(`/inventory?page=${page}&limit=${limit}`)
    return data
}

export class Location_API{
    static async getAll(limit=10,page=1,){
        const {data} = await axiosInstance.get(`/location?page=${page}&limit=${limit}`)
        return data
    }
}
