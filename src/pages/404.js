import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import Divider from "../components/Divider"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Section>
      <h1>404</h1>
      <p>Oh boi, looks like you hit a deadend!</p>
      <Link to="/">Take me outta here!</Link>
      <br />
      <Divider />
    </Section>
  </Layout>
)

export default NotFoundPage
