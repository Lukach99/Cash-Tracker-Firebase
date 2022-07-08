/* import "./index.scss" */
import { useContext, useMemo, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ExpensesHttp from "../../../http/expenses.http";
import { UserContext } from "../../../contex/user.contex";
import { useNavigate } from "react-router-dom";
import { TUserAccount } from "../../../models/userAccount.model";

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
        const checkbox = getValues("checkbox")


        

        const users = await expensesHttp.getUser()
        console.log(users)
        const usersResults = Object.keys(users)
        const usersfilter:any = usersResults.filter((key) => users[key]?.email === email && users[key]?.password === password )
        console.log({users: usersfilter})
        if(usersfilter.length === 0){
            reset()
            setWrongInfo(true)
            return
        }

        if(checkbox){
            localStorage.setItem('user', users[usersfilter[0]].username )
        } else {
            localStorage.setItem('user',"" )
        }

        setUser(users[usersfilter[0]].username)
        navigate("/")
    }

    const createAccHandler = () => {
        navigate("/signup")
    }

    return <section>
        <form action="" name="test" className="form-create-user" onSubmit={handleSubmit(onSubmit)}>
            
            <input type="email" {...register("email",{ required: true })} placeholder="e-mail" />
            <input type="password" {...register("password",{ required: true })} placeholder="password" />
            <label ><input type="checkbox" {...register("checkbox")} /> Remember login</label>
            
            
            <button type="submit">Login in</button>
        </form>
        {wrongInfo && 
            <p>Wrong password or e-mail! Please try again</p>
            }

        <p>OR</p>
        <button onClick={createAccHandler}>Create user account</button>
    </section>
}

export default Login