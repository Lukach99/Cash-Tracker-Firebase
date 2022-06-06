import "./index.scss"
import Select from 'react-select'
import { useContext, useMemo, useCallback, useEffect, useState } from "react";
import { ExpensesContext } from "../../contex/expenses.contex";
import ExpensesHttp from "../../http/expenses.http";
import { Expense, TExpense } from "../../models/expense.model";
import { useForm } from "react-hook-form";

const options = [
  { value: 'Hrana', label: 'Hrana' },
  { value: 'Režije', label: 'Režije' },
  { value: 'vanilla', label: 'Vanilla' }
]

const FormSection = () => { 
    const {register, handleSubmit, getValues, reset, resetField,
        formState: { isSubmitSuccessful, errors }} = useForm()
    const { test, setTest } = useContext(ExpensesContext);

    const expensesHttp = useMemo(() => new ExpensesHttp(), []);

    
    const addExpenses = useCallback(
      async (expense: TExpense) => {
        const data = await expensesHttp.createExpense(expense)
        setTest(await expensesHttp.getExpenses())
      },
      [expensesHttp,setTest],
    )

    const onSubmit = (event:any) => {
       const newExpense: any = getValues()
       console.log(newExpense)
      
        addExpenses(newExpense)

      };

      useEffect(() => {
        if (isSubmitSuccessful) {
          reset();
        }
      }, [isSubmitSuccessful, reset]);

    return <section className="form-section">
        <form action="" name="test" className="form" onSubmit={handleSubmit(onSubmit)}>
            <select {...register("type")} required className="input-select">
                <option defaultValue={test} value="test" hidden>Tip potrošnje</option>
                <option value="Hrana">Hrana</option>
                <option value="Režije">Režije</option>
                <option value="Ostalo">Ostalo</option>
            </select>
            <textarea {...register("overview" , {required: true} )} id="" className="textarea"  placeholder="Message"></textarea>
            <input type="date" {...register("date",{ required: true})} id="" />
            <input type="text" {...register("price",{ required: true, pattern: /^[0-9]*$/ })} placeholder="Cijena" />
            {errors.price && <p>Please enter number</p>}
            <button type="submit">Dodaj</button>
        </form>
    </section>
 }

export default FormSection