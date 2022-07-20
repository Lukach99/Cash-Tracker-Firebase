import "./index.scss"
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Expense} from "../../../models/expense.model"
import EditM from "../EditModal"
import { ExpenseType } from "../../../constants/generic.enums"

const OverviewM = ({expense, deleteHandler, stateHandler, isOverviewActive}:Props) => { 
    const [isEditModalActive, setIsEditModalActive] = useState(false);
    const {type, overview, price, date} = expense

    const openEdit: React.MouseEventHandler<SVGSVGElement> = () => {
        setIsEditModalActive(true)
    }
    return <>   
                {!isEditModalActive && (
                    <>
                    <h3>{type}</h3>
                    <p>{overview}</p>
                    <p>{`${price} Kn`}</p>
                    <p>{date} </p>
                    <div className="overview-icons">
                        <FontAwesomeIcon icon={faEdit} size={"lg"} className="card-delete icons" onClick={openEdit} ></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faTrash} size={"lg"} className="card-delete icons" onClick={deleteHandler} ></FontAwesomeIcon>
                    </div>
                    </>
                    
                )}

                {isEditModalActive && (
                    <EditM prefill={expense} stateHandler={stateHandler} isOverviewActive={isOverviewActive}></EditM>
                )}
                
    </>     
   
 }

type Props = {
    expense: Expense;
    deleteHandler:  React.MouseEventHandler<SVGSVGElement>;
    stateHandler: React.Dispatch<React.SetStateAction<boolean>>;
    isOverviewActive: React.Dispatch<React.SetStateAction<boolean>>
}

export default OverviewM