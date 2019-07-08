import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <section>
        Forestry Starter Blog <Link to="/blog">The Truth About Doug Fir</Link>
      </section>
    </Layout>
  )
}

export default IndexPage
