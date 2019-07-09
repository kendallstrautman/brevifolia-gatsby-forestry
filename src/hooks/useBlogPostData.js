import { graphql } from "gatsby"

export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
      }
      html
    }
  }
`
