import React from 'react'
import PropTypes from 'prop-types'

import './entry.css'

const LiveEntry = ({ children }) => (
  <div className="entry">
    <section className="design">
      <div className="line topline" />
      <div className="anchor" />
      <div className="line bottomline" />
    </section>
    <section className="content">
      <div className="timestamp">1st Of January, 2019</div>
      <h2>Last night's dinner was awesome!</h2>
      <div className="source">via @buoyantair@social.sunshinegardens.org</div>
    </section>
  </div>
)

LiveEntry.propTypes = {
  children: PropTypes.node,
}

export default LiveEntry
