import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Feed from "../components/Feed"
import "./index.css"


const IndexPage = () => (
  <div className="index-page">
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Feed />
    </Layout>
  </div>
)

export default IndexPage
