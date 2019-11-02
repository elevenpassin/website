import React from "react"

import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => (
  <div className="index-page">
    <SEO
      title="Home"
      keywords={[`buoyantair`, `javascript`, `react`, "developer"]}
    />

    <h1>Hello world</h1>
  </div>
)

export default IndexPage
