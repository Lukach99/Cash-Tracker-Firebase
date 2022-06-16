import { NavLink } from "react-router-dom"
import "./index.scss"

const Header = () => {
    return <section className="header">
        <NavLink to="/expenses" className="signup-link" >
            <h1>CashTracker</h1>
          </NavLink>

    </section>
}

export default Header