const config = require('./src/meta/config')

module.exports = {
  siteMetadata: {
    title: `Shane Schmaltz's Website`,
    description: `A site for me to tell you a bit about myself and offer my services as a web developer`,
    author: `@stschmaltz`,
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        options: {
          name: config.manifestName,
          short_name: config.manifestShortName,
          start_url: config.manifestStartUrl,
          background_color: config.manifestBackgroundColor,
          theme_color: config.manifestThemeColor,
          display: config.manifestDisplay,
          display: `minimal-ui`,
          icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        },
      },

      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#202121`,
        theme_color: `#202121`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

    'gatsby-plugin-offline',
  ],
}
