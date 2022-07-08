import { Expense, TExpense } from "../../../models/expense.model"


const DeleteM = ({expense, onConfirm, stateHandler,isDeleteState}:Prop) => { 

    const close: React.MouseEventHandler<HTMLButtonElement> = () => {
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
    expense: Expense;
    onConfirm: React.MouseEventHandler<HTMLButtonElement>;
    stateHandler: React.Dispatch<React.SetStateAction<boolean>>;
    isDeleteState: React.Dispatch<React.SetStateAction<boolean>>
 }

export default DeleteM