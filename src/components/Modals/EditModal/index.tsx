import { TExpense } from "../../../models/expense.model"
import FormSection from "../../FormSection"

const EditM = ({prefill, stateHandler, isOverviewActive}:Props) => { 
    return <>
                <FormSection prefill={prefill} isEditPage={true} idCard={prefill?.id} closeModule={stateHandler} closeEdit={isOverviewActive}></FormSection>
    </>
 }

 type Props = {
    prefill: TExpense;
    stateHandler: any;
    isOverviewActive: any
 }

export default EditM