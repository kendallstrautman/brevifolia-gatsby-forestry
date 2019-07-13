import React from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"
import blogListStyles from "../styles/components/bloglist.module.scss"

const Blog = () => {
  const blogData = useBlogData()
  // function replaceDateSlash(date) {
  //   const newDateStr = date.replace(/\//g, ".")
  //   return newDateStr
  // }
  function renderBlogData() {
    return (
      <div>
        {blogData
          .filter(blog => blog.node.frontmatter.title !== "")
          .map(blog => {
            return (
              <li className={blogListStyles.li} key={blog.node.fields.slug}>
                <Link to={`/blog/${blog.node.fields.slug}`}>
                  <h2>{blog.node.frontmatter.title}</h2>
                  <h3>{blog.node.frontmatter.date}</h3>
                </Link>
                <p>{blog.node.excerpt}</p>
              </li>
            )
          })}
      </div>
    )
  }
  return (
    <section>
      <ul className={blogListStyles.list}>{renderBlogData()}</ul>
    </section>
  )
}

export default Blog
