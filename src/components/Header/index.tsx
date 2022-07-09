import { faEdit, faUser, faUserAlt, faUserAstronaut, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        <NavLink to="/expenses" className="link signup-link" >
            <h1>CashTracker</h1>
          </NavLink>

          {user === "expenses" ? 
          <NavLink to="/login" className="link login-link" >
            Login
          </NavLink> 
          : 
          <button className="user-acc" onClick={dropdownHandler} onBlur={removeDropdownHandler}>
              <p className="user-acc-btn">{user}</p>
              <FontAwesomeIcon icon={faUserCircle} size={"2x"} className="user-acc-icon"></FontAwesomeIcon>
             
              {dropdownMenu &&
                <AccountDropdownMenu></AccountDropdownMenu>}
          </button>
            
          }
  

    </section>
}

export default Header