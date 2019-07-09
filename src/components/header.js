import React from "react"
import { Link } from "gatsby"
import headerStyles from "../styles/components/header.module.scss"

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <nav
        className={headerStyles.nav}
        role="navigation"
        aria-label="main navigation"
      >
        <icon>
          <Link to="/">
            <img
              alt="forestry-logo"
              src="https://app.forestry.io/assets/forestry-logotype-pos-c71a6bd237d9199d0457ba2811553997ff5bab0d2cd0e740686ab26c00d9c240.svg"
              width="112"
              height="28"
            />
          </Link>
        </icon>
        <div>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>
      <div className={headerStyles.subheader}>
        <span>
          <h1>A Lumberjack's Blog</h1>
          <p>
            Notes on the Arboreal universe, tips on using Forestry with Gatsby.
          </p>
        </span>
      </div>
    </header>
  )
}

export default Header
