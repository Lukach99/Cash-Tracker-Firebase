import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../contex/user.contex";
import "./index.scss"

const AccountDropdownMenu = () => {
    const { user, setUser } = useContext(UserContext);
    let navigate = useNavigate();

    const signoffHandler = () => {
        setUser("expenses")
        localStorage.setItem('user',"" )
        navigate("/")
    }
    const accountInfoHandler = () => {
        
        navigate("/account")
    }

    return <section className="acc-dropdown">
        <p  onClick={accountInfoHandler} >Settings</p>
        <p className="acc-dropdown-signoff" onClick={signoffHandler}>Sign out</p>
    </section>
}

export default AccountDropdownMenu