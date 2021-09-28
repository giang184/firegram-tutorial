import React from "react";

const Modal = ({selectedImg}) => {
  return (  
    <div className="backdrop">
      <img src={selectedImg} alt="large pic" />
    </div>
  );
}

export default Modal;