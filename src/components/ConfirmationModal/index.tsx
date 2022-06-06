import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createPortal } from "react-dom";

import "./index.scss";

const ConfirmationModal = ({ children, onConfirm, stateHandler }: Props) => {
  const modalContainer:any = document.getElementById("modal-container");

  document.body.style.overflow = "hidden";

  const close = () => {
    document.body.style.overflow = "";

    stateHandler(false);
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
        <div className="modal__buttons">
          <button className="danger" type="button" onClick={close}>
            Cancel
          </button>
          <button className="success" type="button" onClick={confirmHandler}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(Modal, modalContainer);
};

type Props = { children: any; onConfirm: Function; stateHandler: Function };

export default ConfirmationModal;
