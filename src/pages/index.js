import React, { Component } from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Title from '../components/Title'

import './index.css'
import LiveEntry from '../components/LiveEntry'

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blogPosts: [],
      contributions: [],
    }
  }

  componentDidMount() {
    fetch(
      'https://public-api.wordpress.com/rest/v1.1/sites/buoyantair.wordpress.com/posts/'
    )
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          blogPosts: data.posts,
        })
      })
      .catch(console.error)
    fetch('https://api.github.com/users/buoyantair/events')
      .then(resp => resp.json())
      .then(events => events.filter(x => x.type === 'PullRequestEvent'))
      .then(data => {
        this.setState({
          contributions: data,
        })
      })
      .catch(console.error)
  }

  render() {
    const { blogPosts, contributions } = this.state
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
      <Layout>
        <SEO
          title="Home"
          keywords={[
            `buoyantair`,
            `frontend`,
            `enginner`,
            `react`,
            'portifolio',
            'resume',
            'developer',
          ]}
        />
        <section className="updates">
          <Title big={true}>photons from the far side of the universe</Title>
          <section className="entry-list">
            {renderList &&
              renderList.length &&
              renderList.map(entry => (
                <LiveEntry key={entry.ID || entry.id} entry={entry} />
              ))}
          </section>
        </section>
      </Layout>
    )
  }
}

export default IndexPage
