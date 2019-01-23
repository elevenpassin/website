import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Title from '../components/Title'

const SecondPage = () => (
  <Layout>
    <SEO
      title="About buoyantair"
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
    <Title big={true}>about buoyantair</Title> <p>Hello!</p>
  </Layout>
)

export default SecondPage
