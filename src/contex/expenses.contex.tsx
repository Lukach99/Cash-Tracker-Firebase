import { createContext, useState } from "react";
import { Expense } from "../models/expense.model";

const ExpensesContext:any = createContext({
    test: [],
    setTest: (expenses: Expense[]) => {},
  });


const ExpensesProvider = ({children}:Props) => {
    const [test, setTest] = useState([]);

    return (
    <ExpensesContext.Provider value={{test, setTest}}>
        {children}
    </ExpensesContext.Provider>
    );
}

type Props = {
    children: any
}

export {ExpensesContext, ExpensesProvider}