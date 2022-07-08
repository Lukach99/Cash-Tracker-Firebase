import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createPortal } from "react-dom";
import "./index.scss";

const ModalView = ({ children, stateHandler, isOverview, isDelete }: Props) => {
    
  const modalContainer:any = document.getElementById("modal-container");

  document.body.style.overflow = "hidden";

  const close: React.MouseEventHandler<any> = () => {
    document.body.style.overflow = "";
    stateHandler(false);
    isOverview(false)
    isDelete(false)

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
    stateHandler:  React.Dispatch<React.SetStateAction<boolean>>;
    isOverview:  React.Dispatch<React.SetStateAction<boolean>>;
    isDelete:  React.Dispatch<React.SetStateAction<boolean>>

};

export default ModalView;
