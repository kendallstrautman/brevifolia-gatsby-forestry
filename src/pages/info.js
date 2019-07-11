import React from "react"
import Layout from "../components/layout"
import aboutStyles from "../styles/components/about.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"

const Info = () => {
  const { contact } = useSiteMetaData()
  return (
    <Layout>
      <section className={aboutStyles.about_blurb}>
        <p>
          This blog was created using <a href="https://forestry.io">Forestry</a>{" "}
          & <a href="https://gatsbyjs.com">Gatsby</a>
          <br /> To get started, import this site into Forestry or checkout the
          repository here.
        </p>
        <a href={`mailto:${contact.email}`}>Email: {contact.email}</a>
        <br />
        <a href={contact.twitter_url}>Twitter: {contact.twitter_handle}</a>
        <br />
        <a href={contact.github_url}>Github: {contact.github_handle}</a>
        <br />
      </section>
    </Layout>
  )
}

export default Info
