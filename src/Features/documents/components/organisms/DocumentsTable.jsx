
import OptionBtn from '../../../../assets/Icons/OptionsBtn';
import useDocuments from '../../hooks/useDocuments';

export default function DocumentsTable () {
  const { documents , SelectDocument, handleSelectAll, getFileIcon , selectedDocuments } = useDocuments();

  return <>
    {/* Documents Table */}
    <div className="table-responsive rounded-3 border">
      <table className="table table-hover">
        <thead className='table-primary'>
          <tr className='smallSize'>
            <th>
              <input type="checkbox" className="form-check-input fs-6" onChange={handleSelectAll}
                checked={selectedDocuments.length === documents.length && documents.length > 0} />
            </th>
            <th>Name</th>
            <th>Owner</th>
            <th>Last Modified</th>
            <th>File Size</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {documents.map((document) => (
            <tr key={document.id}>
              <td>
                <input type="checkbox" className="form-check-input"
                  checked={selectedDocuments.includes(document.id)} 
                  onChange={() => SelectDocument(document.id)} />
              </td>
              <td>
                <div className="d-flex align-items-center gap-3">
                  {getFileIcon(document.type)}
                  <span>{document.name}</span>
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <img className="rounded-circle"/>
                  <span>{document.owner}</span>
                </div>
              </td>
              <td>{document.lastModified}</td>
              <td>{document.fileSize}</td>
              <td>
                <button className="btn p-1 text-muted border-0">
                  <OptionBtn />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
};



