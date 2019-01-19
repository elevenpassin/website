import React from 'react'
import PropTypes from 'prop-types'

import './body.css'

const Body = ({ children }) => <div className="body">{children}</div>

Body.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Body
