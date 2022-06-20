/* import "./index.scss" */
import { useContext, useMemo, useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ExpensesHttp from "../../../http/expenses.http";
import { UserContext } from "../../../contex/user.contex";


const SignUp = () => { 
    const {register, handleSubmit, getValues, reset,
        formState: { isSubmitSuccessful, errors }} = useForm()
    const { user, setUser } = useContext(UserContext);

    const expensesHttp = useMemo(() => new ExpensesHttp(), []);

    const onSubmit = async () => {
        const username = getValues("username")
        setUser(username)
        const user = await expensesHttp.createUser(username)
        console.log(user)
    }

    return <section>
        <form action="" name="test" className="form" onSubmit={handleSubmit(onSubmit)}>
            
            <input type="text" {...register("username",{ required: true })} placeholder="Username" />
            <button type="submit">Create User</button>
        </form>
    </section>
}

export default SignUp