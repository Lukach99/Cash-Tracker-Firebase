import { faEdit, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createPortal } from "react-dom";
import "./index.scss";

const ModalView = ({ children, onConfirm, stateHandler, isOverview, isDelete }: Props) => {
    
  const modalContainer:any = document.getElementById("modal-container");

  document.body.style.overflow = "hidden";

  const close = () => {
    document.body.style.overflow = "";
    stateHandler(false);
    isOverview(false)
    isDelete(false)

  };

  const confirmHandler = async () => {
    await onConfirm();

    close();
  };

  const Modal = (
    <div className="modal-container" onClick={close}>
        <div className="modal" onClick={(event) => event.stopPropagation()}>

            <FontAwesomeIcon className="modal__cancel" icon={faX} onClick={close} />
            {children}
        
        </div>
    </div>
  );

  return createPortal(Modal, modalContainer);
};

type Props = { 
    children?: any; 
    onConfirm?: any;
    stateHandler?: any;
    isOverview: any;
    isDelete: any

};

export default ModalView;
