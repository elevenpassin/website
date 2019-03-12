import React from "react"

import "./menu.css"

export default () => (
  <svg
    className="burger-menu"
    viewBox="0 0 100 100"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="black">
      <rect
        class="menu-corner-stick"
        x="30"
        y="0"
        rx="5"
        ry="5"
        width="70"
        height="10"
      />
      <rect
        class="menu-middle-stick"
        x="0"
        y="30"
        rx="5"
        ry="5"
        width="70"
        height="10"
      />
      <rect
        class="menu-corner-stick"
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
