const config = require("./config.json")

module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      resolve: `gatsby-plugin-react-helmet`,
    },
  ],
}
