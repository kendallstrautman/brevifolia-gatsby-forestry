import React from "react"
import { Link } from "gatsby"

const Layout = ({ children }) => {
  return (
    <section>
      <header>
        <nav role="navigation" aria-label="main navigation">
          <icon>
            <Link to="/">
              <img
                src="https://app.forestry.io/assets/forestry-logotype-pos-c71a6bd237d9199d0457ba2811553997ff5bab0d2cd0e740686ab26c00d9c240.svg"
                width="112"
                height="28"
              />
            </Link>
          </icon>
        </nav>
      </header>
      {children}
      <footer></footer>
    </section>
  )
}

export default Layout
