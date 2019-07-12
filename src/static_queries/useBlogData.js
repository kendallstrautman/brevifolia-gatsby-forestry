import { graphql, useStaticQuery } from "gatsby"

const useBlogData = () => {
  const data = useStaticQuery(graphql`
    query getBlogData {
      allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
        edges {
          node {
            frontmatter {
              date(formatString: "MM/DD/YY")
              author
              title
              hero_image {
                childImageSharp {
                  fluid {
                    srcSet
                  }
                }
              }
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
