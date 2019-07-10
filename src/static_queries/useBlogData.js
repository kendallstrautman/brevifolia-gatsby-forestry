import { graphql, useStaticQuery } from "gatsby"

const useBlogData = () => {
  const data = useStaticQuery(graphql`
    query getBlogData {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date(formatString: "MM/DD/YY")
              author
              title
            }
            excerpt(pruneLength: 200)
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
