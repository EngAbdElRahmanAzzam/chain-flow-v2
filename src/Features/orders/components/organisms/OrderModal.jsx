//client imports
import Modal from "../../../../Shared/Components/Organisms/modal";

function ModalOrder({ newOrder, handleCloseModal, handleInputChange, handleSubmitOrder }){
  return(
    <Modal title="Create Order" closeHandler={handleCloseModal} submitHandle={handleSubmitOrder}>
        <div>
            {['value', 'supplier', 'items'].map((field) => (
              <div className="mb-3" key={field}>
                <label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                <input
                  type={field === 'supplier' ? 'text' : 'number'}
                  name={field}
                  className="form-control"
                  value={newOrder[field]}
                  onChange={handleInputChange}
                  required
                />
              </div>
            ))}
        </div>
    </Modal>
  )
}

export default ModalOrder;
