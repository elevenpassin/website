import React from "react"
import PropTypes from "prop-types"
import "./mobile-menu.css"

const menuItems = [
  {
    name: "home",
  },
  {
    name: "about",
  },
  {
    name: "code",
  },
  {
    name: "writings",
  },
  {
    name: "contact",
  },
]

const MobileMenu = ({ menuToggled }) => (
  <nav className={`mobile-menu ${menuToggled && "toggled"}`}>
    <ul>
      .
      {menuItems.map(item => (
        <li key={item.name}>
          <span className="item-text">{item.name}</span>
          <span className="item-line" />
        </li>
      ))}
    </ul>
  </nav>
)

MobileMenu.propTypes = {
  menuToggled: PropTypes.bool.isRequired,
}

export default MobileMenu
