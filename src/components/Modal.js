import React from "react";

const Modal = ({selectedImage}) => {
    return (
        <div className="backdrop">
            <img src={selectedImage} alt="enlarged pic"/>
        </div>
    )
}

export default Modal
