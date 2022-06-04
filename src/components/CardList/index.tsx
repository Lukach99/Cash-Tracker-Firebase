import axios from "axios";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ExpensesContext } from "../../contex/expenses.contex";
import ExpensesHttp from "../../http/expenses.http";
import { Expense, TExpense } from "../../models/expense.model";
import Card from "../Card"
import "./index.scss"

const CardList = () => { 
    const [expenses, setExpenses] = useState<Expense[]>([])

    const { test, setTest } = useContext(ExpensesContext);

    const expensesHttp = useMemo(() => new ExpensesHttp(), []);

    const fetchExpenses = useCallback(
      async () => {
        const data = await expensesHttp.getExpenses()
        setTest(data)
      },
      [setTest],
    )

    useEffect(() => {
      fetchExpenses()  
    }, [fetchExpenses])
    
    

    return <section className="card-list">
       {test?.map((item: TExpense) => { return <Card key={item.id} expense={item}></Card> })}
    </section>
 }

export default CardList