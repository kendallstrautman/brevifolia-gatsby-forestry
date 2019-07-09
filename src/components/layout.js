import React from "react"
import Header from "./header"
import Footer from "./footer"
import layoutStyles from "../styles/components/layout.module.scss"

const Layout = ({ children }) => {
  return (
    <section className={layoutStyles.layout}>
      <Header />
      <div className={layoutStyles.content}>{children}</div>
      <Footer />
    </section>
  )
}

export default Layout
