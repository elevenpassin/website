import React from "react"
import { StaticQuery, graphql } from 'gatsby'

import Section from "../Section"
import Divider from "../Divider"
import ScrollIndicator from '../ScrollIndicator'
import "./header.css";

const Header = () => (
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
      <div className="header">
        <Section>
          <h1>{data.site.siteMetadata.title}</h1>
          <p>{data.site.siteMetadata.description}</p>
          <Divider />
        </Section>
        <ScrollIndicator />
      </div>
    )}
  />
)

export default Header