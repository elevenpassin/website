import React from "react"
import PropTypes from "prop-types"
import "./menu-icon.css"

const BurgerMenu = ({ menuToggled, toggleMenu }) => {
  return (
    <svg
      onClick={() => toggleMenu(!menuToggled)}
      className={`burger-menu ${menuToggled && "toggled"}`}
      viewBox="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="black">
        <rect
          className="menu-corner-stick"
          x="30"
          y="0"
          rx="5"
          ry="5"
          width="70"
          height="10"
        />
        <rect
          className="menu-middle-stick"
          x="0"
          y="30"
          rx="5"
          ry="5"
          width="70"
          height="10"
        />
        <rect
          className="menu-corner-stick"
          x="30"
          y="60"
          rx="5"
          ry="5"
          width="70"
          height="10"
        />
      </g>
    </svg>
  )
}

BurgerMenu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  menuToggled: PropTypes.bool.isRequired,
}

export default BurgerMenu
