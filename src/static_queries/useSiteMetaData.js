import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query getMetadata {
      site {
        siteMetadata {
          title
          description
          about
          contact {
            email
          }
        }
      }
    }
  `)
  return data.site.siteMetadata
}

export default useSiteMetadata
