import "./index.scss"
import Select from 'react-select'
import { useContext, useMemo, useCallback, useEffect, useState } from "react";
import { ExpensesContext } from "../../contex/expenses.contex";
import ExpensesHttp from "../../http/expenses.http";
import { TExpense } from "../../models/expense.model";

const options = [
  { value: 'Hrana', label: 'Hrana' },
  { value: 'Režije', label: 'Režije' },
  { value: 'vanilla', label: 'Vanilla' }
]

const FormSection = () => { 

    const { test, setTest } = useContext(ExpensesContext);
    const [newExpense, setNewExpense] = useState<any>({})

    const expensesHttp = useMemo(() => new ExpensesHttp(), []);

    const addExpenses = useCallback(
      async (expense: TExpense) => {
        const data = await expensesHttp.createExpense(expense)
        console.log(data)
        setNewExpense(data)
        fetchExpenses()
      },
      [expensesHttp],
    )


    const fetchExpenses = useCallback(
        async () => {
          const data = await expensesHttp.getExpenses()
          setTest(data)
        },
        [setTest],
      )
  
    /* useEffect(() => {
      addExpenses()  
    }, [fetchExpenses]) */


    const handleSubmit = (event:any) => {
        event.preventDefault();
        const data = new FormData(event.target);
        const value: any = Object.fromEntries(data.entries());
        addExpenses(value)
        console.log(newExpense)
        /* console.log(testing) */
      };

    return <section className="form-section">
        <form action="" name="test" className="form" onSubmit={handleSubmit}>
            <select name="type" required className="input-select">
                <option defaultValue={test} value="test" hidden>Tip potrošnje</option>
                <option value="Hrana">Hrana</option>
                <option value="Režije">Režije</option>
                <option value="Ostalo">Ostalo</option>
            </select>
            <textarea name="overview" id="" className="textarea"  placeholder="Message"></textarea>
            <input type="date" name="date" id="" />
            <input type="text" name="price" placeholder="Cijena" />
            <button type="submit">Dodaj</button>
        </form>
    </section>
 }

export default FormSection