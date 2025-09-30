//third-party
import { data } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

//client-imports
import LocationsToolbar from '../components/organisms/locationsToolbar';
import LocationsTable from '../components/organisms/LocationsTable';
import { Location_API } from '../../../server/services';


export default function LocationsPage () {
  const { isLoading , data: locations , isError } = useQuery({
    queryKey: ["inventory"],
    queryFn: () => Location_API.getAll()
  });
  console.log(locations)
  return (
  <>
    <LocationsToolbar />
    <LocationsTable />
  </>)
};

