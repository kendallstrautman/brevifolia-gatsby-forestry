import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Blog from "./blog"

const IndexPage = () => {
  return (
    <Layout>
      <section>
        <Blog />
      </section>
    </Layout>
  )
}

export default IndexPage
