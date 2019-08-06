import React from "react"
import Layout from "../components/layout"
import BlogList from "../components/blogList"

const IndexPage = () => {
  return (
    <Layout page="home" bgColor="inherit">
      <section>
        <BlogList />
      </section>
    </Layout>
  )
}

export default IndexPage
