module.exports = {
  siteMetadata: {
    name: `Intheburgoshouse.netlify.com`,
    title: ``,
    description: ``,
    author: `Christine Burgos`,
    icon: ``,
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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`PT Serif:400,700`, "Roboto:100,200,300,700"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "https://intheburgoshouse.herokuapp.com"
          : `http://localhost:1337`,
        contentTypes: [`article`, `bio`, `user`, `project`],
        queryLimit: 1000,
      },
    },
    {
      resolve: "gatsby-plugin-page-transitions",
      options: {
        transitionTime: 500,
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
        background_color: `#F3f3f3`,
        theme_color: `#F3f3f3`,
        display: `minimal-ui`,
        icon: `src/images/js.jpg`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
