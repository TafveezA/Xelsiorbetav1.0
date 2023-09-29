import React from "react";
import './Modal.css';
const Modal = ({children, is_open = false}) => {
    const [open, setOpen] = React.useState(false)
    React.useEffect(() => {
        setOpen(is_open);
    }, [is_open])


    return (open && <div className="modal">
            <div className="modal__top">
                <button
                    className="modal__top__close"
                    onClick={() => {
                        setOpen(false)
                    }}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'white'
                    }}
                >X</button>
            </div>
            <div className="modal__content">
                {children}
            </div>
            <div className="modal__bottom"></div>
        </div>)
    
};

export default Modal;