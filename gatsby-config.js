module.exports = {
  siteMetadata: {
    title: `buoyantair`,
    description: `frontend engineer & free software enthusiast`,
    author: `buoyantair`,
    menuItems: [
      {
        name: "home",
        path: "/",
      },
      {
        name: "about",
        path: "/about",
      },
      {
        name: "code",
        path: "https://github.com/buoyantair",
        external: true,
      },
      {
        name: "writings",
        path: "https://buoyantair.wordpress.com/blog/",
        external: true,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `buoyantair`,
        short_name: `buoyantair`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/`,
        name: "posts",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
