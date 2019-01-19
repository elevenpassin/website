import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Title from '../components/Title'

import './index.css'
import LiveEntry from '../components/LiveEntry'

const IndexPage = () => (
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
        <LiveEntry />
        <LiveEntry />
        <LiveEntry />
        <LiveEntry />
      </section>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </section>
  </Layout>
)

export default IndexPage
