module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    'gatsby-plugin-theme-ui',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-theme-style-guide',
  ],
};