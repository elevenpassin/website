import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Menu = ({ menuItems }) => (
  <nav>
    {
      menuItems.map(item => <Link to={item.path}>{item.name}</Link>)
    }
  </nav>
)

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object),
}

Menu.defaultProps = {
  menuItems: []
}

export default Menu
