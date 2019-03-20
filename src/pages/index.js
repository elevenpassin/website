import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Feed from "../components/Feed"
import "./index.css"

const IndexPage = () => (
  <div className="index-page">
    <Layout>
      <SEO
        title="Home"
        keywords={[`buoyantair`, `javascript`, `react`, "developer"]}
      />
      <Feed />
    </Layout>
  </div>
)

export default IndexPage
