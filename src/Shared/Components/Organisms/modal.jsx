function Modal({ children }){

    return (
        <div className="modal d-block m-0" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>

            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Create New Order</h5>
                        <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                    </div>

                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>

        </div>  
    )
}

export default Modal