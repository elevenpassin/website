import React from "react"
import PropTypes from "prop-types"
import "./entry.css"

const FeedEntry = ({ entry }) => {
  const entryType = entry.type

  let date = new Date()
  let rootURL
  let title
  let href

  switch (entryType) {
    case "PullRequestEvent":
      date = new Date()
      href = entry.payload.pull_request._links.html.href
      rootURL = href.split("//")[1].split("/")[0]
      title = `buoyantair contributed to ${entry.repo.name} via pull request #${
        entry.payload.number
      }`
      break
    case "post":
      date = new Date(entry.date)
      rootURL = entry.URL.split("//")[1].split("/")[0]
      title = entry.title
      href = entry.URL
      break
    default:
      break
  }

  return (
    <div className="entry">
      <section className="design">
        <div className="line topline" />
        <div className="anchor" />
        <div className="line bottomline" />
      </section>
      <section className="content">
        <div className="timestamp">
          {date.toLocaleDateString("en-IN", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
        <a href={href}>
          <h2>{title}</h2>
          <div className="source">via {rootURL}</div>
        </a>
      </section>
    </div>
  )
}

FeedEntry.propTypes = {
  entry: PropTypes.object,
}

export default FeedEntry
