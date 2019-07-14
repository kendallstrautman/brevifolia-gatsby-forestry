import React from "react"
import Layout from "../components/layout"
import infoStyles from "../styles/components/info.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"

const Info = () => {
  const { contact, repoUrl } = useSiteMetaData()
  return (
    <Layout>
      <section className={infoStyles.info_blurb}>
        <h2>
          This blog was created using <a href="https://forestry.io">Forestry</a>{" "}
          & <a href="https://gatsbyjs.com">Gatsby</a>
          <br />
          <br /> To get started, import this site into Forestry or checkout the
          repository <a href={repoUrl}>here</a>.
        </h2>
        <ul>
          <li>
            <h2>
              <a href={`mailto:${contact.email}`}>Email: {contact.email}</a>
            </h2>
          </li>
          <li>
            <h2>
              <a href={contact.twitter_url}>
                Twitter: {contact.twitter_handle}
              </a>
            </h2>
          </li>
          <li>
            <h2>
              <a href={contact.github_url}>Github: {contact.github_handle}</a>
            </h2>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export default Info
