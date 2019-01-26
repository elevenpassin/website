import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Title from '../components/Title'
import './about.css'
import resume from '../assets/resume.pdf'
const SecondPage = () => (
  <Layout>
    <SEO
      title="about"
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
    <div className="about">
      <Title big={true}>about buoyantair</Title>
      <section className="desc">
        Hey! I'm a javascript developer working on <i>free</i> and open source
        software. I have experience working in teams, designing and developing
        word-class projects using various modern web technologies. <br />
        You can find my resume <a href={resume}>here.</a>
      </section>
    </div>
  </Layout>
)

export default SecondPage
