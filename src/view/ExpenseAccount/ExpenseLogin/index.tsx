/* import "./index.scss" */
import { useContext, useMemo, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ExpensesHttp from "../../../http/expenses.http";
import { UserContext } from "../../../contex/user.contex";
import { useNavigate } from "react-router-dom";

const Login = () => { 
    const {register, handleSubmit, getValues, reset,
        formState: { isSubmitSuccessful, errors }} = useForm()
    const { user, setUser } = useContext(UserContext);

    const [wrongInfo, setWrongInfo] = useState(false)
    const expensesHttp = useMemo(() => new ExpensesHttp(), []);

    let navigate = useNavigate();

    

    const onSubmit = async () => {
        const email = getValues("email")
        const password = getValues("password")

        const users = await expensesHttp.getUser()
        console.log(users)
        const usersfilter = Object.keys(users).filter((key) => users[key]?.email === email && users[key]?.password === password )
        console.log(usersfilter)
        if(usersfilter.length === 0){
            reset()
            setWrongInfo(true)
            return
        }

        setUser(users[usersfilter[0]].username)
        navigate("/")
    }

    return <section>
        <form action="" name="test" className="form-create-user" onSubmit={handleSubmit(onSubmit)}>
            
            <input type="email" {...register("email",{ required: true })} placeholder="e-mail" />
            <input type="password" {...register("password",{ required: true })} placeholder="password" />
            
            <button type="submit">Login in</button>
        </form>
        {wrongInfo && 
            <p>Wrong password or e-mail! Please try again</p>
            }
    </section>
}

export default Login