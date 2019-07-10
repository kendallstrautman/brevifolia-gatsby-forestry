import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date(formatString: "MM/DD/YY")
        hero_image {
          childImageSharp {
            fluid(maxWidth: 1000) {
              src
            }
          }
        }
      }
      html
    }
  }
`

const Blog = props => {
  const data = props.data.markdownRemark
  console.log(data.frontmatter.hero_image.childImageSharp.fluid.src)
  return (
    <Layout>
      <figure>
        <img
          src={data.frontmatter.hero_image.childImageSharp.fluid.src}
          alt={`blog_hero_${data.frontmatter.title}`}
        />
      </figure>
      <h1>{data.frontmatter.title}</h1>
      <h2>{data.frontmatter.date}</h2>
      <p>By: {data.frontmatter.author}</p>
      <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
    </Layout>
  )
}

export default Blog
