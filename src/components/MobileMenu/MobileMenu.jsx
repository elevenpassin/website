import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./mobile-menu.css"

const menuItems = [
  {
    name: "home",
    path: '/'
  },
  {
    name: "about",
    path: '/about'
  },
  {
    name: "code",
    path: '/code'
  },
  {
    name: "writings",
    path: '/blog'
  },
  {
    name: "contact",
    path: '/contact'
  },
]

const MobileMenu = ({ toggleMenu, menuToggled }) => (
  <nav
    onClick={() => toggleMenu(!menuToggled)}
    className={`mobile-menu ${menuToggled && "toggled"}`}
  >
    <ul>
      {menuItems.map(item => (
        <Link to={item.path} key={item.name}>
          <span className={`item-text ${window.location.pathname === item.path ? "active" : ""}`}>
          {item.name}
          </span>
          <span className="item-line" />
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
