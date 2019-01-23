import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'

import './menu.css'

const siteMenuQuery = graphql`
  query SiteMenuQuery {
    site {
      siteMetadata {
        siteMenuData {
          name
          destination
          external
        }
      }
    }
  }
`

const MenuItem = ({ name, destination, external }) =>
  external ? (
    <a className="menu-item" href={destination}>
      {name}
    </a>
  ) : (
    <Link className="menu-item" to={destination}>
      {name}
    </Link>
  )

export default () => (
  <StaticQuery
    query={siteMenuQuery}
    render={({
      site: {
        siteMetadata: { siteMenuData },
      },
    }) => (
      <div className="menu">
        {siteMenuData.map((item, key) => (
          <MenuItem {...item} key={key} />
        ))}
      </div>
    )}
  />
)
