import React from "react"
import PropTypes from "prop-types"

import "./section.css"

const Section = ({ children }) => (
  <section className="section">{children}</section>
)

Section.propTypes = {
  children: PropTypes.node,
}

Section.defaultProps = {
  children: "",
}

export default Section
