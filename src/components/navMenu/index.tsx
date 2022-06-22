import { NavLink } from "react-router-dom"
import "./index.scss"

const NavMenu = () => {
    return <section className="navmenu">
        <NavLink to="/expenses" className="link" >
            Tracker
          </NavLink>

          <NavLink to="/overview" className="link" >
            Overview
          </NavLink>

          
    </section>
}

export default NavMenu