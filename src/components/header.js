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
          <img
            alt="forestry-logo"
            src="https://app.forestry.io/assets/forestry-logotype-pos-c71a6bd237d9199d0457ba2811553997ff5bab0d2cd0e740686ab26c00d9c240.svg"
            width="112"
            height="28"
          />
        </Link>
        <div>
          <Link to="/" activeClassName={headerStyles.navItemActive}>
            Home
          </Link>
          <Link to="/about" activeClassName={headerStyles.navItemActive}>
            About
          </Link>
        </div>
      </nav>
      <div className={headerStyles.subheader}>
        <span>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </span>
      </div>
    </header>
  )
}

export default Header
