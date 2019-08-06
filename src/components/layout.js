import React from "react"
import Header from "./header"
import Helmet from "react-helmet"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import layoutStyles from "../styles/components/layout.module.scss"

const Layout = props => {
  const { title, description, primaryColor } = useSiteMetadata()
  console.log(props.pathname == "/info")
  return (
    <section
      className={`${layoutStyles.layout} ${
        props.pathname == "/info" &&
        layoutStyles.info_page}`}
      style={{
        backgroundColor: `${
          props.pathname == "/info" &&
          primaryColor}`,
      }}
    >
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header title={title} />
      <div className={layoutStyles.content}>{props.children}</div>
    </section>
  )
}

export default Layout
