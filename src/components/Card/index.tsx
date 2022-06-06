import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXmark
  } from "@fortawesome/free-solid-svg-icons";
import { TExpense } from "../../models/expense.model"
import "./index.scss"
import ExpensesHttp from "../../http/expenses.http";
import { useCallback, useContext, useMemo, useState } from "react";
import { ExpensesContext } from "../../contex/expenses.contex";
import axios from "axios";
import ConfirmationModal from "../ConfirmationModal";

const Card = ({expense}: Props) => { 

    const { test, setTest } = useContext(ExpensesContext);
    const [isModalActive, setIsModalActive] = useState(false);

    const {id,type, overview, price, date} = expense

    const expensesHttp = useMemo(() => new ExpensesHttp, [])

    const openModal:any = (event: MouseEvent) => {
        event.stopPropagation();
        setIsModalActive(true);
      };

    const deleteHandler = async () => {
        const newExpenses = test.filter((expense: TExpense) => expense.id !== id )

        await expensesHttp.deleteExpense(id)
        setTest(newExpenses)
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
        <article className="card">
            <FontAwesomeIcon icon={faXmark} className="card-delete" onClick={openModal}></FontAwesomeIcon>
            <h3>{expense.type}</h3>
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