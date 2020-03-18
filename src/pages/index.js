import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>
      Hey! I'm a javascript developer working on free and open source software.
      I have experience working in teams, designing and developing world-class projects
      using various modern web technologies.
    </p>
    <div>
      <Link to="/blog">blog</Link>
      <Link to="/newsletter">newsletter</Link>
      <Link to="/contact">contact</Link>
    </div>
  </Layout>
)

export default IndexPage
