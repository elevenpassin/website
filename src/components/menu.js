import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Menu = ({ siteTitle }) => (
  <header>
    <h1>
      <Link
        to="/"
      >
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Menu.propTypes = {
  siteTitle: PropTypes.string,
}

Menu.defaultProps = {
  siteTitle: ``,
}

export default Menu
