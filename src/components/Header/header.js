import { Link } from 'gatsby'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Logo from '../logo'
import Menu from '../Menu'
import ElseWhere from '../ElseWhere'
import './header.css'

const siteTitleQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Header = () => (
  <StaticQuery
    query={siteTitleQuery}
    render={data => (
      <div className="header">
        <Logo />
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <h1 className="siteTitle">{data.site.siteMetadata.title}</h1>
        </Link>
        <Menu />
        <ElseWhere />
        <footer>
          © buoyantair, 2019.
          <br />
          view source
        </footer>
      </div>
    )}
  />
)

export default Header
