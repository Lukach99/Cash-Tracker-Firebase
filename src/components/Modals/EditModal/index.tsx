import { Expense, TExpense } from "../../../models/expense.model"
import FormSection from "../../FormSection"

const EditM = ({prefill, stateHandler, isOverviewActive}:Props) => { 
   console.log(prefill)
    return <>
                <FormSection prefill={prefill} isEditPage={true} idCard={prefill.id} closeModule={stateHandler} closeEdit={isOverviewActive}></FormSection>
    </>
 }

 type Props = {
    prefill: Expense;
    stateHandler: React.Dispatch<React.SetStateAction<boolean>>;
    isOverviewActive: React.Dispatch<React.SetStateAction<boolean>>
 }

export default EditM