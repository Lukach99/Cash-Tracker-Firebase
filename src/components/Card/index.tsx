import { TExpense } from "../../models/expense.model"
import "./index.scss"

const Card = ({expense}: Props) => { 
    return <article className="card">
        <h3>{expense.type}</h3>
        <p>{expense.overview}</p>
        <p>{`${expense.price} Kn`}</p>
        <p>{expense.date} </p>
    </article>
 }


type Props={
    expense: TExpense
}
export default Card