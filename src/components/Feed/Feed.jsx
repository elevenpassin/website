import React, { useState, useEffect } from "react"

import FeedEntry from "../FeedEntry"
import "./feed.css"

const InvertedHeading = ({ children }) => (
  <h1 className="inverted-heading">{children}</h1>
)

export default () => {
  const [blogPosts, setBlogPosts] = useState([])
  const [contributions, setContributions] = useState([])

  // const fetchData = async () => {
  // try {
  //   let posts = await fetch(
  //     "https://public-api.wordpress.com/rest/v1.1/sites/buoyantair.wordpress.com/posts/"
  //   )
  //   posts = await posts.json()
  //   setBlogPosts(posts)
  //   let contribs = await fetch(
  //     "https://api.github.com/users/buoyantair/events"
  //   )
  //   contribs = await contribs.json()
  //   // contribs = contribs.filter(x => x.type === "PullRequestEvent")
  //   setContributions(contribs)
  // } catch (e) {
  //   console.error(e)
  // }
  // }

  useEffect(() => {
    fetch(
      "https://public-api.wordpress.com/rest/v1.1/sites/buoyantair.wordpress.com/posts/"
    )
      .then(resp => resp.json())
      .then(data => {
        setBlogPosts(data.posts)
      })
      .catch(console.error)
    // fetch("https://api.github.com/users/buoyantair/events")
    //   .then(resp => resp.json())
    //   .then(events => {
    //     console.log(events)
    //     return events.filter(x => x.type === "PullRequestEvent")
    //   })
    //   .then(data => {
    //     setContributions(data)
    //   })
    //   .catch(console.error)
  })

  const renderList = [...blogPosts, ...contributions]
  renderList
    .sort((a, b) => {
      const aTime = Date.parse(a.created_at) || Date.parse(a.date)
      const bTime = Date.parse(b.created_at) || Date.parse(b.date)

      if (aTime > bTime) {
        return 1
      } else if (aTime < bTime) {
        return -1
      } else {
        return 0
      }
    })
    .reverse()

  return (
    <div className="feed">
      <InvertedHeading>
        photons from the far side of the universe
      </InvertedHeading>
      <section className="entry-list">
        {(renderList &&
          renderList.length &&
          renderList.map((entry, index) => (
            <FeedEntry key={entry.ID || entry.id || index} entry={entry} />
          ))) ||
          null}
      </section>
    </div>
  )
}
