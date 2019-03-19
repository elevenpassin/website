import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import Divider from "../components/Divider"
import { graphql } from "gatsby"

import "./blogpost.css"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        keywords={[`buoyantair`, `blog`, `article`]}
      />
      <div className="blog-post-container">
        <article className="blog-post">
          <section>
            <h1>{frontmatter.title}</h1>
            <p>Published on {frontmatter.date}</p>
          </section>
          <Divider />
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
