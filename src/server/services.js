import { axiosInstance } from "./config.axios";

export function getAllInventory_API(limit=10,page=1,){
    axiosInstance.get(`/inventory?page=${page}&limit=${limit}`)
}