import { faEdit, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createPortal } from "react-dom";
import { TExpense } from "../../models/expense.model";
import FormSection from "../FormSection";

import "./index.scss";

const EditModal = ({ children, stateHandler, prefill }: Props) => {
  const modalContainer:any = document.getElementById("modal-container");

  document.body.style.overflow = "hidden";

  const close = () => {
    document.body.style.overflow = "";

    stateHandler(false);
  };


  const Modal = (
    <div className="modal-container" onClick={close}>
      <div className="modal" onClick={(event) => event.stopPropagation()}>
        <FontAwesomeIcon className="modal__cancel" icon={faX} onClick={close} />
        <FormSection prefill={prefill} isEditPage={true} idCard={prefill?.id} closeEdit={stateHandler}></FormSection>
        </div>
      </div>
    /* </div> */
  );

  return createPortal(Modal, modalContainer);
};

type Props = { 
    children?: any; 
    stateHandler: Function;
    prefill?: TExpense
};

export default EditModal;
