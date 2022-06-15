import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { type } from "@testing-library/user-event/dist/type"
import { useState } from "react"
import { TExpense } from "../../../models/expense.model"
import EditM from "../EditModal"

const OverviewM = ({expense, deleteHandler, stateHandler, isOverviewActive}:Props) => { 
    const [isEditModalActive, setIsEditModalActive] = useState(false);
    const {type, overview, price, date} = expense

    const openEdit = () => {
        setIsEditModalActive(true)
    }
    return <>   
                {!isEditModalActive && (
                    <>
                    <h3>{type}</h3>
                    <p>{overview}</p>
                    <p>{`${price} Kn`}</p>
                    <p>{date} </p>
                    <div>
                        <FontAwesomeIcon icon={faEdit} size={"lg"} className="card-delete" onClick={openEdit} ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faTrash} size={"lg"} className="card-delete" onClick={deleteHandler} ></FontAwesomeIcon>
                    </div>
                    </>
                    
                )}

                {isEditModalActive && (
                    <EditM prefill={expense} stateHandler={stateHandler} isOverviewActive={isOverviewActive}></EditM>
                )}
                
    </>     
   
 }

type Props = {
    expense: TExpense;
    deleteHandler: any;
    stateHandler: any;
    isOverviewActive: any
}

export default OverviewM