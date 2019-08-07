import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"

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
