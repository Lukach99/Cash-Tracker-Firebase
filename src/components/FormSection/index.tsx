import "./index.scss"
import { useContext, useMemo, useCallback, useEffect, useState } from "react";
import { ExpensesContext } from "../../contex/expenses.contex";
import ExpensesHttp from "../../http/expenses.http";
import { Expense, TExpense } from "../../models/expense.model";
import { useForm, Controller } from "react-hook-form";
import {ExpenseType} from "../../constants/generic.enums";
import REGEX_DECIMAL_NUM from "../../constants/regex.constants";
import { UserContext } from "../../contex/user.contex";



const FormSection = ({idCard,isEditPage, prefill, closeModule, closeEdit}:Props) => { 
    const {register, handleSubmit, getValues, reset, control,
        formState: { isSubmitSuccessful, errors }} = useForm()
    const { test, setTest } = useContext(ExpensesContext);
    const { user, setUser } = useContext(UserContext);
    const expensesHttp = useMemo(() => new ExpensesHttp(), []);

    
    const addExpenses = useCallback(
      async (expense: Expense) => {
        await expensesHttp.createExpense(expense, user)
        
        setTest(await expensesHttp.getExpenses(user))
      },
      [expensesHttp,setTest],
    )

    const updateExpenses = useCallback(
        async (expense: TExpense) => {
          console.log(idCard)
          await expensesHttp.updateExpense(idCard,expense, user)
          setTest(await expensesHttp.getExpenses(user))
        },
        [expensesHttp,setTest],
      )
  

    const onSubmit = (event:any) => {

        if(isEditPage){
            const newExpense: any = getValues()
            console.log(newExpense)
            
            updateExpenses(newExpense)
            document.body.style.overflow = "";
            closeEdit?.(false)
            closeModule?.(false)
        
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
                <option defaultValue="test" value="test" hidden>Type of cost</option>
                {Object.keys(ExpenseType).map((key) =>  <option key={key} value={key}>{ExpenseType[key as keyof typeof ExpenseType]}</option> )}
            </select>
            <textarea {...register("overview" , {required: true} )} id="" className="textarea"  placeholder="Message"></textarea>
            <input type="date" {...register("date",{ required: true})} id="" className="calender"/>
            <input type="text" {...register("price",{ required: true, pattern: REGEX_DECIMAL_NUM })} className="price" placeholder="Price" />
            {errors.price && <p>Please enter number</p>}
            <button type="submit" className="form-btn">Add cost</button>
        </form>
    </section>
 }

 type Props = {
     idCard?: string;
     isEditPage?: boolean;
     prefill?: Expense;
     closeModule?: React.Dispatch<React.SetStateAction<boolean>>;
     closeEdit?: React.Dispatch<React.SetStateAction<boolean>>
 }

export default FormSection