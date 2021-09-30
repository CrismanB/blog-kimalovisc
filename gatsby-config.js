module.exports = {
  siteMetadata: {
    title: `Kimalovisc`,
    description: `Site Apresentacao empresa 😃`,
    author: `Crisman B Santos`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/`,
      },
    },

    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: "carbon",
              theme: "panda",
            },
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        ssr: false,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kimalovisc`,
        short_name: `kimalovisc`,
        start_url: `/`,
        background_color: `#143c49`,
        theme_color: `#143c49`,
        display: `minimal-ui`,
        icon: `src/images/kimalovisc.png`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
