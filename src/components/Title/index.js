import React from 'react'
import PropTypes from 'prop-types'
import './title.css'

// const TitlePart = ({ children }) => {
//   return <div className="title-part">{children}</div>
// }

const Title = ({ big, children }) => {
  // const lines = []

  // const split = children.split(' ')
  // let count = split.length

  // const TitleParts = lines.map((line, index) => (
  //   <TitlePart key={index}>{line}</TitlePart>
  // ))

  return <div className={big ? 'title big' : 'title'}>{children}</div>
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  big: PropTypes.bool,
}

export default Title
