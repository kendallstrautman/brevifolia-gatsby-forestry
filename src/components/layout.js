import React from "react"
import { Link } from "gatsby"
import layoutStyles from "../styles/components/layout.module.css"

const Layout = ({ children }) => {
  return (
    <section>
      <header className={layoutStyles.header}>
        <nav
          className={layoutStyles.nav}
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
        <div>A Lumberjack's Journal</div>
        <p>A blot sharing notes on the Arboreal universe.</p>
      </header>
      {children}
      <footer>
        <div>Built with Gatsby & Forestry</div>
      </footer>
    </section>
  )
}

export default Layout
