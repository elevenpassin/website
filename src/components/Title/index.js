import React from 'react'
import './title.css'

// const TitlePart = ({ children }) => {
//   return <div className="title-part">{children}</div>
// }

export default ({ children }) => {
  // const lines = []

  // const split = children.split(' ')
  // let count = split.length

  // const TitleParts = lines.map((line, index) => (
  //   <TitlePart key={index}>{line}</TitlePart>
  // ))

  return <div className="title">{children}</div>
}
