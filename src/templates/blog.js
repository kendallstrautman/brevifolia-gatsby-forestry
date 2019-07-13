import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import blogTemplateStyles from "../styles/templates/blog.module.scss"

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date(formatString: "MMMM Do, YYYY")
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
  return (
    <Layout>
      <article className={blogTemplateStyles.blog}>
        <figure className={blogTemplateStyles.blog__hero}>
          <img
            src={data.frontmatter.hero_image.childImageSharp.fluid.src}
            alt={`blog_hero_${data.frontmatter.title}`}
          />
        </figure>
        <div className={blogTemplateStyles.blog__info}>
          <h1>{data.frontmatter.title}</h1>
          <h3>{data.frontmatter.date}</h3>
        </div>
        <div
          className={blogTemplateStyles.blog__body}
          dangerouslySetInnerHTML={{ __html: data.html }}
        ></div>
        <h2 className={blogTemplateStyles.blog__footer}>
          Written By: {data.frontmatter.author}
        </h2>
      </article>
    </Layout>
  )
}

export default Blog
