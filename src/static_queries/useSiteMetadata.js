import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
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
        }
      }
    }
  `)
  return data.site.siteMetadata
}

export default useSiteMetadata
