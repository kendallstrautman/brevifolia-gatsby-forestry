import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/components/header.module.scss"

const Header = props => {
  return (
    <header className={headerStyles.header}>
      <nav
        className={headerStyles.nav}
        role="navigation"
        aria-label="main navigation"
      >
        <Link to="/">
          <h1>{props.title}</h1>
        </Link>
        <div>
          <h1>
            <Link to="/info" activeClassName={headerStyles.navItemActive}>
              info
            </Link>
          </h1>
        </div>
      </nav>
    </header>
  )
}

export default Header
