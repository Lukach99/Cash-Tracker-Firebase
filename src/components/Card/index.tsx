import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faXmark
  } from "@fortawesome/free-solid-svg-icons";
import { TExpense } from "../../models/expense.model"
import "./index.scss"
import ExpensesHttp from "../../http/expenses.http";
import { useContext, useMemo, useState } from "react";
import { ExpensesContext } from "../../contex/expenses.contex";
import {ExpenseType} from "../../constants/generic.enums";
import ModalView from "../Modals";
import DeleteM from "../Modals/DeleteModal";
import OverviewM from "../Modals/OverviewModal";

const Card = ({expense}: Props) => { 

    const { test, setTest } = useContext(ExpensesContext);
    const [isModalActive, setIsModalActive] = useState(false);
    const [isDeleteModalActive, setIsDeleteModalActive] = useState(false);
    const [isOverviewModalActive, setIsOverviewModalActive] = useState(false);
   
    const {id,type, overview, price, date, firebaseId} = expense

    const expensesHttp = useMemo(() => new ExpensesHttp, [])

    const openDeleteModal:any = (event: MouseEvent) => {
        event.stopPropagation();
        setIsModalActive(true);
        setIsDeleteModalActive(true)
      };

    const openOverviewModal:any = (event: MouseEvent) => {
        event.stopPropagation();
        setIsModalActive(true);
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
        <ModalView onConfirm={undefined} 
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
    expense: TExpense
}
export default Card