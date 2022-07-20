import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ExpensesContext } from "../../contex/expenses.contex";
import { UserContext } from "../../contex/user.contex";
import ExpensesHttp from "../../http/expenses.http";
import Card from "../Card"
import "./index.scss"

const CardList = () => { 
    const { test, setTest } = useContext(ExpensesContext);
    const { user, setUser } = useContext(UserContext);

    const expensesHttp = useMemo(() => new ExpensesHttp(), []);

    const fetchExpenses = useCallback(
      async (user: string) => {
        const data = await expensesHttp.getExpenses(user)
        setTest(data)

      },
      [expensesHttp,user],
    )

    useEffect(() => {

      fetchExpenses(user) 
      
    }, [])
    
    

    return <section className="card-list">
       {test?.map((item) => { return <Card key={item.id} expense={item}></Card> })}
    </section>
 }

export default CardList