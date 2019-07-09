import React from "react"
import Layout from "../components/layout"
import aboutStyles from "../styles/components/about.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"

const About = () => {
  const { about, contact } = useSiteMetaData()
  return (
    <Layout>
      <section className={aboutStyles.about_blurb}>
        <p>{about}</p>
        <a href={`mailto:${contact.email}`}>Email: {contact.email}</a>
      </section>
    </Layout>
  )
}

export default About
