import { useContext } from "react";
import CardList from "../../../components/CardList"
import FormSection from "../../../components/FormSection"
import { UserContext } from "../../../contex/user.contex";
import "./index.scss"

const ExpensePage = () => { 
    return <section className="expense-page">
                <CardList></CardList>
                <FormSection></FormSection>
            </section>
            
        
           
}

export default ExpensePage