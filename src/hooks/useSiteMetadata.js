import { graphql, useStaticQuery } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menuItems {
            name
            path
          }
        }
      }
    }
  `)

  return site.siteMetadata
}

export default useSiteMetadata
