import { useContext, useState } from "react";
import { NavLink } from "react-router-dom"
import { UserContext } from "../../contex/user.contex";
import AccountDropdownMenu from "./AccountDropmenu";
import "./index.scss"

const Header = () => {
    const { user, setUser } = useContext(UserContext);
    const [dropdownMenu, setDropdownMenu] = useState(false)


    const dropdownHandler = () => {
      if(dropdownMenu){
        setDropdownMenu(false)
      } else {
        setDropdownMenu(true)
      }
      
    }

    const removeDropdownHandler = () => {
    
        setDropdownMenu(false)
      
      
    }
    
    return <section className="header">
        <NavLink to="/expenses" className="signup-link" >
            <h1>CashTracker</h1>
          </NavLink>

          {user === "expenses" ? 
          <NavLink to="/login" className="link" >
            Login
          </NavLink> 
          : 
          <button className="user-acc" onClick={dropdownHandler} onBlur={removeDropdownHandler}>
              <p>{user}</p>
              {dropdownMenu &&
                <AccountDropdownMenu></AccountDropdownMenu>}
          </button>
            
          }
  

    </section>
}

export default Header