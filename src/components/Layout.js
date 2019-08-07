import React from "react"
import Header from "./Header"
import Helmet from "react-helmet"
import useSiteMetadata from "../static_queries/useSiteMetadata"
import layoutStyles from "../styles/components/layout.module.scss"

export default function Layout(props) {
  const { title, description } = useSiteMetadata()
  return (
    <section
      className={`${layoutStyles.layout} ${
        props.page === "info" && 
        layoutStyles.info_page}`}
      style={{
        backgroundColor: props.bgColor,
      }}
    >
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header page={props.page} title={title} />
      <div className={layoutStyles.content}>{props.children}</div>
    </section>
  )
}