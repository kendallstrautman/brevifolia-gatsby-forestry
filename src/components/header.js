import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/components/header.module.scss"

const Header = props => {
  return (
    <header
      className={`${headerStyles.header} ${typeof window !== "undefined" &&
        window.location.pathname == "/info" &&
        headerStyles.info_page}`}
    >
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
            <Link
              to={
                typeof window !== "undefined" &&
                window.location.pathname == "/info"
                  ? "/"
                  : "/info"
              }
              activeClassName={headerStyles.navItemActive}
            >
              {typeof window !== "undefined" &&
              window.location.pathname == "/info"
                ? "close"
                : "info"}
            </Link>
          </h1>
        </div>
      </nav>
    </header>
  )
}

export default Header
