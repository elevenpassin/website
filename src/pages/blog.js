import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/Section"
import Divider from "../components/Divider"

import "./blog.css"

const PostLink = ({ post }) => (
  <div className="blog-post-link">
    <h1>{post.frontmatter.title}</h1>
    <p>{post.excerpt}</p>
  </div>
)

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = (
    <section className="blog-posts-list">
      {edges.map(edge => (
        <Link to={edge.node.frontmatter.path}>
          <PostLink key={edge.node.id} post={edge.node} />
        </Link>
      ))}
    </section>
  )

  return (
    <Layout>
      <SEO
        title="Writings"
        keywords={[`blog`, `buoyantair`, `javascript`, "programming"]}
      />
      <Section>
        <h1>writings</h1>
        <p>I write about code, politics here</p>
      </Section>
      <Divider />
      {Posts}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`

export default BlogPage
