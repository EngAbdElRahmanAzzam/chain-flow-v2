
export default function LocationsTable ({data, isLoading , isError}) {
  //render
  if(isLoading)
    return <>loading...</>

  if(isError)
    return <>Error wait...</>
    
  console.log(data)
  return (
  <>
    <div className="table-responsive rounded-3 border">
      <table className="table table-hover">
        <thead className='table-primary'>
          <tr className='smallSize'>
            <th></th>
            <th>Location Name</th>
            <th>Type</th>
            <th>Created Date</th>
            <th>Last Updated</th>
          </tr>
        </thead>

        {/* <tbody>
          {data.data.map((location) => (
            <tr key={location.id}>
              <td>
                <input type="checkbox" className="form-check-input"
                  //checked={selectedLocation.includes(location._id)} 
                 // onChange={() => SelectDocument(location._id)}
                  />
              </td>

              <td>{location.locationName}</td>
              <td>{location.type}</td>
              <td>{location.createdAt}</td>
              <td>{location.updatedAt}</td>
            </tr>
          ))}
        </tbody> */}

      </table>
    </div>
  </>
  )
}



