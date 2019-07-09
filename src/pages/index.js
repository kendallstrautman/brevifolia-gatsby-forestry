import React from "react"
import Layout from "../components/layout"
import BlogList from "../components/blogList"

const IndexPage = () => {
  return (
    <Layout>
      <section>
        <BlogList />
      </section>
    </Layout>
  )
}

export default IndexPage
