import React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'
import Body from '../Body'
import './layout.css'

const Layout = ({ children }) => (
  <div className="app">
    <Header />
    <Body>{children}</Body>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
