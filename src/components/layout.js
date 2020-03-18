/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.css"
import "./app.css"

import Header from "./header"
import Menu from "./menu"

import useSiteMetadata from '../hooks/useSiteMetadata'

const Layout = ({ children, noHeader }) => {
  const { title, menuItems } = useSiteMetadata()

  const displayHeader = noHeader ? null : (
    <>
      <Header siteTitle={title} />
      <Menu menuItems={menuItems} />
    </>
  )

  return (
    <>
      <div
        className="app-container"
      >
        {displayHeader}
        <main>{children}</main>
        <footer>
          © buoyantair {new Date().getFullYear()}, Built with 💝
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noHeader: PropTypes.bool
}

export default Layout
