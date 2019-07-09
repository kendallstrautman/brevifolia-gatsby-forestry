import { graphql, useStaticQuery } from "gatsby"

const useBlogData = () => {
  const data = useStaticQuery(graphql`
    query getBlogData {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              slug
              author
            }
            html
            excerpt
          }
        }
      }
    }
  `)
  return data.allMarkdownRemark.edges
}

export default useBlogData
