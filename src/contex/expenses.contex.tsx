import { createContext, useState } from "react";
import { Expense, TExpense } from "../models/expense.model";

const ExpensesContext:any = createContext<ContextProps>({
    test: [],
    setTest: (expenses: Expense[]) => {},
  });


const ExpensesProvider = ({children}:Props) => {
    const [test, setTest] = useState<TExpense[]>([]);

    return (
    <ExpensesContext.Provider value={{test, setTest}}>
        {children}
    </ExpensesContext.Provider>
    );
}

type Props = {
    children: any
}

type ContextProps = {
    test: Expense[],
    setTest:Function
}

export {ExpensesContext, ExpensesProvider}