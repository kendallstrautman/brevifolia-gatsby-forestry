import React from "react"
import Layout from "../components/layout"
import infoStyles from "../styles/components/info.module.scss"
import useSiteMetaData from "../static_queries/useSiteMetadata"

const Info = (props) => {
  const { contact, repoUrl } = useSiteMetaData()
  return (
    <Layout pathname={props.uri}>
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
              <a href={contact.twitter_url}>
                Twitter: {contact.twitter_handle}
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href={contact.github_url}>Github: {contact.github_handle}</a>
            </p>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export default Info
