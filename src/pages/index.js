import React from "react"
import Layout from "../components/layout"
import BlogList from "../components/blogList"

const IndexPage = (props) => {
  return (
    <Layout pathname={props.uri} bgColor="inherit">
      <section>
        <BlogList />
      </section>
    </Layout>
  )
}

export default IndexPage
