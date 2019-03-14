import React from "react"
import { StaticQuery, graphql, Link } from 'gatsby'
import { Location } from '@reach/router'

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
            menuItems {
              name
              path
            }
          }
        }
      }
    `}
    render={data => (
      <Location>
        {
          ({ navigate, location }) => (
            <div className="header">
              <Section>
                <h1>{data.site.siteMetadata.title}</h1>
                <p>{data.site.siteMetadata.description}</p>
                <Divider />
                <nav
                  className="desktop-menu"
                >
                  {data.site.siteMetadata.menuItems.map(item => (
                    <Link className={location.pathname === item.path ? "active" : ""} to={item.path} key={item.name}>
                      <span className={`item-text`}>
                        {item.name}
                      </span>
                      <span className="item-line" />
                    </Link>
                  ))}
                </nav>
              </Section>
              <ScrollIndicator />
            </div>
          )
        }
      </Location>
    )}
  />
)

export default Header