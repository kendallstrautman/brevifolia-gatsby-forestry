import React from "react"
import footerStyles from "../styles/components/footer.module.scss"

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <div>
        Built with <a href="https://gatsbyjs.org">Gatsby</a> &{" "}
        <a href="https://forestry.io">Forestry</a>
      </div>
    </footer>
  )
}

export default Footer
