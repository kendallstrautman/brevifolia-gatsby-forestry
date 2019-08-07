import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query getMetadata {
      site {
        siteMetadata {
          title
          description
          contact {
            email
            twitter_handle
            twitter_url
            github_handle
            github_url
          }
          primaryColor
          repoUrl
        }
      }
    }
  `)
  return data.site.siteMetadata
}