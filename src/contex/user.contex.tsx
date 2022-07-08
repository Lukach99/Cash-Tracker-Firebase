import { createContext, useState } from "react";
import { Expense } from "../models/expense.model";

const UserContext = createContext({
    user: "expenses",
    setUser: (user: string) => {},
  });


const UserProvider = ({children}:Props) => {
    const rememberUser = localStorage.getItem('user')
    const [user, setUser] = useState(rememberUser || "expenses");
   
   
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