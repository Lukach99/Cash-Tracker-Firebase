import axios from "axios";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ExpensesContext } from "../../contex/expenses.contex";
import { UserContext } from "../../contex/user.contex";
import ExpensesHttp from "../../http/expenses.http";
import { Expense, TExpense } from "../../models/expense.model";
import Card from "../Card"
import "./index.scss"

const CardList = () => { 
    const { test, setTest } = useContext(ExpensesContext);
    const { user, setUser } = useContext(UserContext);

    const expensesHttp = useMemo(() => new ExpensesHttp(), []);

    const fetchExpenses = useCallback(
      async () => {
        const data = await expensesHttp.getExpenses(user)
        setTest(data)
        
       
  
      },
      [expensesHttp],
    )

    useEffect(() => {
      
        fetchExpenses() 
        
      
    }, [fetchExpenses,test,user])
    
    

    return <section className="card-list">
       {test?.map((item: TExpense) => { return <Card key={item.id} expense={item}></Card> })}
    </section>
 }

export default CardList