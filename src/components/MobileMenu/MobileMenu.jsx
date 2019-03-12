import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
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

const MobileMenu = ({ toggleMenu, menuToggled }) => (
  <nav
    onClick={() => toggleMenu(!menuToggled)}
    className={`mobile-menu ${menuToggled && "toggled"}`}
  >
    <ul>
      {menuItems.map(item => (
        <Link to={`/${item.name !== "home" ? item.name : ""}`} key={item.name}>
          <li>
            <span className="item-text">{item.name}</span>
            <span className="item-line" />
          </li>
        </Link>
      ))}
    </ul>
  </nav>
)

MobileMenu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  menuToggled: PropTypes.bool.isRequired,
}

export default MobileMenu
