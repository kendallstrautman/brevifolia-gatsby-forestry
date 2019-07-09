import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

//dynamic query, must occur within each post context
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

const Blog = props => {
  const data = props.data.markdownRemark
  console.log(data.frontmatter)
  return (
    <Layout>
      <h1>{data.frontmatter.title}</h1>
      <p>By: {data.frontmatter.author}</p>
      <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
    </Layout>
  )
}

export default Blog
