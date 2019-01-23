module.exports = {
  siteMetadata: {
    title: `buoyantair`,
    description: `buoyantair is a frontend enginer and free software enthusiast from india.`,
    author: `@buoyantair`,
    elseWhere: [
      {
        name: 'fediverse',
        profile: '@buoyantair@social.sunshinegardens.org',
        link: 'https://social.sunshinegardens.org/users/buoyantair',
      },
      {
        name: 'matrix',
        profile: '@regula@chat.sunshinegardens.org',
      },
      {
        name: 'gitlab',
        profile: 'gitlab.com/buoyantair',
        link: 'https://gitlab.com/buoyantair',
      },
      {
        name: 'github',
        profile: 'github.com/buoyantair',
        link: 'https://github.com/buoyantair',
      },
    ],
    siteMenuData: [
      {
        name: 'home',
        destination: '/',
        external: false,
      },
      {
        name: 'about',
        destination: '/about',
        external: false,
      },
      {
        name: 'code',
        destination: 'https://gitlab.com/buoyantair/',
        external: true,
      },
      {
        name: 'writings',
        destination: 'https://buoyantair.wordpress.com',
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
