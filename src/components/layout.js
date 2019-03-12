/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

import BurgerMenu from "./BurgerMenu"

const Layout = ({ children }) => (
  <>
    <div className="layout">{children}</div>
    <BurgerMenu />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
