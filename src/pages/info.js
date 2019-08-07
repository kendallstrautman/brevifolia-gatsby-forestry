import React from "react"
import Layout from "../components/Layout"
import infoStyles from "../styles/pages/info.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"

export default function Info() {
  const { contact, repoUrl, primaryColor } = useSiteMetaData()
  return (
    <Layout page="info" bgColor={primaryColor}>
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
            <p>
              <a href={`mailto:${contact.email}`}>Email: {contact.email}</a>
            </p>
          </li>
          <li>
            <p>
              <a href={`https://twitter.com/${contact.twitter_handle}`}>
                Twitter: @{contact.twitter_handle}
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href={`https://github.com/${contact.github_handle}`}>Github: {contact.github_handle}</a>
            </p>
          </li>
        </ul>
      </section>
    </Layout>
  )
}