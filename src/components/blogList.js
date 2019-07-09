import React from "react"
import { Link } from "gatsby"
import useBlogData from "../static_queries/useBlogData"

const Blog = () => {
  const blogData = useBlogData()
  function renderBlogData() {
    return (
      <div>
        {blogData.map(blog => {
          //hack, need to find a better way to filter the blogs...
          //about md excerpt was being added
          if (blog.node.frontmatter.title != "") {
            return (
              <li key={blog.node.fields.slug}>
                <Link to={`/blog/${blog.node.fields.slug}`}>
                  <h2>{blog.node.frontmatter.title}</h2>
                </Link>
                <p>{blog.node.excerpt}</p>
              </li>
            )
          }
        })}
      </div>
    )
  }
  return (
    <section>
      <ul>{renderBlogData()}</ul>
    </section>
  )
}

export default Blog
