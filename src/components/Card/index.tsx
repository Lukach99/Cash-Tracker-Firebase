import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEdit,
    faTrash,
    faXmark
  } from "@fortawesome/free-solid-svg-icons";
import { TExpense } from "../../models/expense.model"
import "./index.scss"
import ExpensesHttp from "../../http/expenses.http";
import { useCallback, useContext, useMemo, useState } from "react";
import { ExpensesContext } from "../../contex/expenses.contex";
import axios from "axios";
import ConfirmationModal from "../ConfirmationModal";
import OverviewEditModal from "../OverviewModal";
import FormSection from "../FormSection";
import EditModal from "../EditModal";
import {ExpenseType} from "../../constants/generic.enums";

const Card = ({expense}: Props) => { 

    const { test, setTest } = useContext(ExpensesContext);
    const [isModalActive, setIsModalActive] = useState(false);
    const [isOverviewModalActive, setIsOverviewModalActive] = useState(false);
    const [isEditModalActive, setIsEditModalActive] = useState(false);
   

    const {id,type, overview, price, date} = expense

    const expensesHttp = useMemo(() => new ExpensesHttp, [])

    const openModal:any = (event: MouseEvent) => {
        event.stopPropagation();
        setIsModalActive(true);
      };

      const openEdit:any = (event: MouseEvent) => {
        event.stopPropagation();
        setIsEditModalActive(true)
        setIsOverviewModalActive(false)
    }

     
      const openOverviewModal:any = (event: MouseEvent) => {
        event.stopPropagation();
        setIsOverviewModalActive(true);
      };

    const deleteHandler = async () => {
        const newExpenses = test.filter((expense: TExpense) => expense.id !== id )

        await expensesHttp.deleteExpense(id)
        setTest(newExpenses)
        if(isOverviewModalActive){
            setIsOverviewModalActive(false)
        }
        console.log("deleted")
    }

    return <>
    {isModalActive && (
        <ConfirmationModal
          onConfirm={deleteHandler}
          stateHandler={setIsModalActive}
        >
          <h2>Delete contact</h2>

          <p>Are you sure you want to delete {expense.type}?</p>
        </ConfirmationModal>
      )}

        {isOverviewModalActive && (
            <OverviewEditModal
                onConfirm={deleteHandler}
                stateHandler={setIsOverviewModalActive}
            >
                <h3>{expense.type}</h3>
                <p>{expense.overview}</p>
                <p>{`${expense.price} Kn`}</p>
                <p>{expense.date} </p>
                <div>
                    <FontAwesomeIcon icon={faEdit} size={"lg"} className="card-delete" onClick={openEdit} ></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTrash} size={"lg"} className="card-delete" onClick={deleteHandler} ></FontAwesomeIcon>
                </div>
                
            </OverviewEditModal>
        )} 
      
        {isEditModalActive && (
          <EditModal stateHandler={setIsEditModalActive} prefill={expense} >
                
          </EditModal>
        )}

        <article className="card" onClick={openOverviewModal}>
            <FontAwesomeIcon icon={faXmark} className="card-del" onClick={openModal} ></FontAwesomeIcon>
                <h3>{ExpenseType[expense.type as keyof typeof ExpenseType]}</h3>
                <p>{expense.overview}</p>
                <p>{`${expense.price} Kn`}</p>
                <p>{expense.date} </p>
        </article>
    </>
}


type Props={
    expense: TExpense
}
export default Card