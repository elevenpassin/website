module.exports = {
  siteMetadata: {
    siteUrl: `https://buoyantair.co/`,
    title: `buoyantair`,
    description: `frontend engineer & free software enthusiast`,
    author: `buoyantair`,
    menuItems: [
      {
        name: "home",
        path: "/",
      }
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
        background_color: `#FFFFFF`,
        theme_color: `#F9D1C9`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-136581772-1",
        head: true,
      },
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-feed",
  ],
}
