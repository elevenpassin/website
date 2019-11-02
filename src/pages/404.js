import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <section>
      <h1>404</h1>
      <p>Oh boi, looks like you hit a deadend!</p>
      <Link to="/">Take me outta here!</Link>
      <br />
    </section>
  </div>
)

export default NotFoundPage
