function Modal({title,submitHandle, closeHandler, children }){

    return (
        <div className="modal m-0 d-block d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>

            <div className="modal-dialog w-75">
                <div className="modal-content p-3">

                    <header className="modal-header p-2">
                        <h4 className="modal-title text-secondary my-0">{title}</h4>
                        <button type="button" className="btn-close" onClick={closeHandler}></button>
                    </header>

                    <main className="modal-body">
                        <>{children}</>                    
                        <footer className="d-flex gap-3">
                            <button type="button" className="btn btn-secondary flex-fill" onClick={closeHandler}>
                                Cancel
                            </button>
                            <button type="button" className="btn btn-primary flex-fill" onClick={submitHandle}>
                                {title}
                            </button>
                        </footer>
                    </main>

                </div>
            </div>

        </div>  
    )
}

export default Modal