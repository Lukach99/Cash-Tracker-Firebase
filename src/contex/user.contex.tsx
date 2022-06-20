import { createContext, useState } from "react";
import { Expense } from "../models/expense.model";

const UserContext:any = createContext({
    user: "expenses",
    setUser: (user: string) => {},
  });


const UserProvider = ({children}:Props) => {
    const [user, setUser] = useState("expenses");

    return (
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
    );
}

type Props = {
    children: any
}

export {UserContext, UserProvider}