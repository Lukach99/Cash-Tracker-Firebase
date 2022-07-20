import "./index.scss"
import { useContext, useMemo, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ExpensesHttp from "../../../http/expenses.http";
import { UserContext } from "../../../contex/user.contex";
import { useNavigate } from "react-router-dom";
import { TUserAccount } from "../../../models/userAccount.model";

const SignUp = () => { 
    const {register, handleSubmit, getValues, reset,
        formState: { isSubmitSuccessful, errors }} = useForm<TUserAccount>()
    const { user, setUser } = useContext(UserContext);

    const expensesHttp = useMemo(() => new ExpensesHttp(), []);

    let navigate = useNavigate();

    const onSubmit = async () => {
        const userName = getValues("username")
        const userInfo = getValues()
        console.log(userInfo)
        setUser(userName)
        const user = await expensesHttp.createUser(userInfo)
        
        console.log(user)
        navigate("/")
    }

    return <section className="form-user-section">
        <form action="" name="test" className="form-create-user" onSubmit={handleSubmit(onSubmit)}>
            
            <input type="text" {...register("username",{ required: true })} placeholder="Username" />
            <input type="email" {...register("email",{ required: true })} placeholder="E-mail" />
            <input type="password" {...register("password",{ required: true })} placeholder="Password" />
            <button type="submit">Create User</button>
        </form>
    </section>
}

export default SignUp