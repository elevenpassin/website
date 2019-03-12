import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import Divider from "../components/Divider"
import Feed from "../components/Feed"
import "./index.css"


const VerticalLine = () => (
  <div className="scroll-indicator">
    <span className="text">scroll down</span>
    <div className="line"/>
  </div>
);

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <Section>
          <h1>{data.site.siteMetadata.title}</h1>
          <p>{data.site.siteMetadata.description}</p>
          <Divider />
          <VerticalLine />
        </Section>
        <Feed />
      </Layout>
    )}
  />
)

export default IndexPage
