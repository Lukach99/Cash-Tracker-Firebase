import { NavLink } from "react-router-dom"

const NavMenu = () => {
    return <section className="navmenu">
        <NavLink to="/expenses"  >
            Tracker
          </NavLink>

          <NavLink to="/overview"  >
            Overview
          </NavLink>
    </section>
}

export default NavMenu