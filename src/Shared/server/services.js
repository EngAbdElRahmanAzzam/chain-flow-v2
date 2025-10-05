//client imports
import { axiosInstance } from "./config.axios";

export class Auth_API{
    static login = async (data) => {
        const {data} = await axiosInstance.post(`/auth/login`, data)
        return data
    }

    static async getAll(page=1, limit=20){
        const {data} = await axiosInstance.get(`/company?status=active&page=${page}&limit=${limit}`)
        return data
    }
}

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

export class Partner_API{
    static route = "partner-connection"

    static getAllMe = async (page=1, limit=20) => {
        const {data} = await axiosInstance.get(`/partner-connection?page=${page}&limit=${limit}`)
        return data.data
    }

    static async getAll(page=1, limit=20){
        const {data} = await axiosInstance.get(`/company?status=active&page=${page}&limit=${limit}`)
        return data
    }
}