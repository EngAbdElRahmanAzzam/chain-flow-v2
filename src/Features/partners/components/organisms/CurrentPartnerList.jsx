import { useQuery } from '@tanstack/react-query';
import { Partner_API } from '../../../../Shared/server/services';

const CurrentPartnerList = ()=>{
    const { isLoading , data: partners , isError } = useQuery({
        queryKey: ["partners-"],
        queryFn: Partner_API.getAllMe
    });
    console.log(partners)
    if(isLoading)
        return <>Loading ....</>
    
    if(isError)
        return <>Error ...</>
    
    return(
        <div className="overflow-auto">
            {partners.map(partner => (
                <div>{9}</div>
            ))}
        </div>
    )
}

export default CurrentPartnerList
{/* <PartnerListItem key={partner.id} partner={partner} selected={selectedPartner?.id === partner.id}
onClick={() => setSelectedPartner(partner)} />

  const { isLoading , data: inventory , isError } = useQuery({
      queryKey: ["inventory"],
      queryFn: () => getAllInventory_API()
  });
  export async function getAllInventory_API(limit=10,page=1,){
    const {data} = await axiosInstance.get(`/inventory?page=${page}&limit=${limit}`)
    return data
}
*/}