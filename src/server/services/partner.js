export class Partner_API{
    static route = "partner-connection"

    static async getAll(page=1, limit=20){
        const {data} = await axiosInstance.get(`/${this.route}?page=${page}&limit=${limit}`)
        return data
    }
}