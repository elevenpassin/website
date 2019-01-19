import React from 'react'
import PropTypes from 'prop-types'

import './body.css'

const Body = ({ children }) => (
  <div className="body">
    <div
      style={{
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      {children}
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  </div>
)

Body.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Body
