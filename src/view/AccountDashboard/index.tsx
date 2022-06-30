import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { UserContext } from "../../contex/user.contex";
import ExpensesHttp from "../../http/expenses.http";

const AccountDashboard = () => { 
    const { user, setUser } = useContext(UserContext);
    const [userInfo, setUserInfo] = useState<any>(null)

    const expensesHttp = useMemo(() => new ExpensesHttp(), []);

    const fetchUserInfo = useCallback(
      async(query: string) => {
        const infoData = await expensesHttp.getUserInfo(query)
       
        setUserInfo(infoData)   
        console.log(userInfo)  
      },
      [expensesHttp],
    )

    useEffect(() => {
      fetchUserInfo(user)
    }, [user])
    
    console.log()

    return <section>
        <h3>User Information</h3>
        <div>
            <p>Username: {userInfo?.username}</p>
            <p>Email: {userInfo?.email}</p>
        </div>
    </section>
 }

 export default AccountDashboard