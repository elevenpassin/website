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
              external
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
                  {data.site.siteMetadata.menuItems.map(({ external, path, name }) => external ? (
                    <a className={location.pathname === path ? "active" : ""} href={path} key={name}>
                      <span className={`item-text`}>
                        {name}
                      </span>
                      <span className="item-line" />
                    </a>
                  ) : (
                      <Link className={location.pathname === path ? "active" : ""} to={path} key={name}>
                        <span className={`item-text`}>
                          {name}
                        </span>
                        <span className="item-line" />
                      </Link>
                    )

                  )}
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