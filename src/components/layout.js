/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import React, { useState } from "react"
import PropTypes from "prop-types"

import MobileMenu from "./MobileMenu"
import BurgerMenu from "./BurgerMenu"
import "./layout.css"
function Layout({ children }) {
  const [menuToggled, setMenuToggled] = useState(false)

  return (
    <>
      <div className={`layout ${menuToggled ? "blur" : ""}`}>{children}</div>
      <MobileMenu
        menuToggled={menuToggled}
        toggleMenu={setMenuToggled.bind(this)}
      />
      <BurgerMenu
        menuToggled={menuToggled}
        toggleMenu={setMenuToggled.bind(this)}
      />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
