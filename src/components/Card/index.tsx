import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXmark
  } from "@fortawesome/free-solid-svg-icons";
import { Expense, TExpense } from "../../models/expense.model"
import "./index.scss"
import ExpensesHttp from "../../http/expenses.http";
import { MouseEventHandler, useContext, useMemo, useState } from "react";
import { ExpensesContext } from "../../contex/expenses.contex";
import {ExpenseType} from "../../constants/generic.enums";
import ModalView from "../Modals";
import DeleteM from "../Modals/DeleteModal";
import OverviewM from "../Modals/OverviewModal";
import { UserContext } from "../../contex/user.contex";
import Moment from "moment";

const Card = ({expense}: Props) => { 

    const { test, setTest } = useContext(ExpensesContext);
    const { user, setUser } = useContext(UserContext);
    
    const [isModalActive, setIsModalActive] = useState(false);
    const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);
    const [isOverviewModalActive, setIsOverviewModalActive] = useState(false);
   
    const {id,type, overview, price, date} = expense

    const expensesHttp = useMemo(() => new ExpensesHttp, [])

    const openDeleteModal: MouseEventHandler<SVGSVGElement> = (event) => {
        event.stopPropagation();
        setIsModalActive(true);
        setIsDeleteModalActive(true)
      };

    const openOverviewModal: MouseEventHandler<HTMLElement> = (event) => {
        event.stopPropagation();
        setIsModalActive(true);
        setIsOverviewModalActive(true);
      };

    const deleteHandler = async () => {
        const newExpenses = test.filter((expense) => expense.id !== id )

        await expensesHttp.deleteExpense(id, user)
        setTest(newExpenses)
        if(isOverviewModalActive){
            setIsOverviewModalActive(false)
        }
        console.log("deleted")
    }

    return <>
      {isModalActive && (
        <ModalView 
              stateHandler={setIsModalActive}
              isDelete={setIsDeleteModalActive}    
              isOverview={setIsOverviewModalActive}
        >
          {/* Delete Modal */}
          {isDeleteModalActive && <DeleteM expense={expense} onConfirm={deleteHandler} stateHandler={setIsModalActive} isDeleteState={setIsDeleteModalActive}></DeleteM>}

          {/* Overview and Edit Modal */}
          {isOverviewModalActive && <OverviewM expense={expense} deleteHandler={deleteHandler} stateHandler={setIsModalActive} isOverviewActive={setIsOverviewModalActive}></OverviewM>}

        </ModalView>

      )}
        
      <article className="card" onClick={openOverviewModal}>
          <FontAwesomeIcon icon={faXmark} className="card-del" onClick={openDeleteModal} ></FontAwesomeIcon>
              <h3>{ExpenseType[type as keyof typeof ExpenseType]}</h3>
              <p>{overview}</p>
              <p>{`${price} Kn`}</p>
              <p>{date} </p>
      </article>
    </>
}

type Props={
    expense: Expense
}
export default Card