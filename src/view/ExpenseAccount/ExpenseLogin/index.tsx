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

    const expensesHttp = useMemo(() => new ExpensesHttp(), []);

    let navigate = useNavigate();

    const onSubmit = async () => {
        const username = getValues("username")
        setUser(username)
        navigate("/")
    }

    return <section>
        <form action="" name="test" className="form" onSubmit={handleSubmit(onSubmit)}>
            
            <input type="text" {...register("username",{ required: true })} placeholder="Username" />
            <button type="submit">Login in</button>
        </form>
    </section>
}

export default Login