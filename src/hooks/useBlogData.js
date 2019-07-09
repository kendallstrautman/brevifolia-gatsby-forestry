import { graphql, useStaticQuery } from "gatsby"

const useBlogData = () => {
  const data = useStaticQuery(graphql`
    query getBlogData {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            excerpt
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark.edges
}

export default useBlogData
