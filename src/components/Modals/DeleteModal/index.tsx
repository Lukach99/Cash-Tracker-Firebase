import { TExpense } from "../../../models/expense.model"


const DeleteM = ({expense, onConfirm, stateHandler,isDeleteState}:Prop) => { 

    const close = () => {
        document.body.style.overflow = "";
        isDeleteState(false)
        stateHandler(false);
      };
    return <>
            <h2>Delete contact</h2>

            <p>Are you sure you want to delete {expense.type}?</p>
            <div className="modal__buttons">
                <button className="danger" type="button" onClick={close}>
                     Cancel
                </button>
                <button className="success" type="button" onClick={onConfirm}>
                    Confirm
                </button>
            </div>
        </>
 }

 type Prop = {
    expense: TExpense;
    onConfirm: any;
    stateHandler:any;
    isDeleteState:any
 }

export default DeleteM