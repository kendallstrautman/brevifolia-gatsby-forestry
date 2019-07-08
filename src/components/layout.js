import React from "react"
import Header from "./header"
import Footer from "./footer"
import layoutStyles from "../styles/components/layout.module.scss"

const Layout = ({ children }) => {
  return (
    <section className={layoutStyles.layout}>
      <Header />
      {children}
      <Footer />
    </section>
  )
}

export default Layout
