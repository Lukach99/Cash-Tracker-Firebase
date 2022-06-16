import "./index.scss"
import { useContext, useMemo, useCallback, useEffect, useState } from "react";
import { ExpensesContext } from "../../contex/expenses.contex";
import ExpensesHttp from "../../http/expenses.http";
import { TExpense } from "../../models/expense.model";
import { useForm } from "react-hook-form";
import {ExpenseType} from "../../constants/generic.enums";
import REGEX_DECIMAL_NUM from "../../constants/regex.constants";


const FormSection = ({idCard,isEditPage, prefill, closeModule, closeEdit}:Props) => { 
    const {register, handleSubmit, getValues, reset,
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

    const updateExpenses = useCallback(
        async (expense: TExpense) => {
          const data = await expensesHttp.updateExpense(idCard,expense)
          setTest(await expensesHttp.getExpenses())
        },
        [expensesHttp,setTest],
      )
  

    const onSubmit = (event:any) => {

        if(isEditPage){
            const newExpense: any = getValues()
            console.log(newExpense)
            
            updateExpenses(newExpense)
            document.body.style.overflow = "";
            closeEdit(false)
            closeModule(false)
        
        } else{
            const newExpense: any = getValues()
            console.log(newExpense)
           
             addExpenses(newExpense)
        }
       

      };

      useEffect(() => {
        if (isSubmitSuccessful) {
          reset();
        }

        if(isEditPage){
            reset(prefill)
        }
      }, [isSubmitSuccessful, reset]);

    return <section className="form-section">
        <form action="" name="test" className="form" onSubmit={handleSubmit(onSubmit)}>
            <select {...register("type")} required className="input-select">
                <option defaultValue={test} value="test" hidden>Tip potrošnje</option>
                {Object.keys(ExpenseType).map((key) =>  <option key={key} value={key}>{ExpenseType[key as keyof typeof ExpenseType]}</option> )}
            </select>
            <textarea {...register("overview" , {required: true} )} id="" className="textarea"  placeholder="Message"></textarea>
            <input type="date" {...register("date",{ required: true})} id="" />
            <input type="text" {...register("price",{ required: true, pattern: REGEX_DECIMAL_NUM })} placeholder="Cijena" />
            {errors.price && <p>Please enter number</p>}
            <button type="submit">Dodaj</button>
        </form>
    </section>
 }

 type Props = {
     idCard?: any;
     isEditPage?: boolean;
     prefill?: TExpense;
     closeModule?: any;
     closeEdit?:any
 }

export default FormSection