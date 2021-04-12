export default {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `q4furp8uan13`, // or process.env.CONTENTFUL_SPACE_ID
        accessToken: `jLICHLw0_i93cg-lUSZcbcfoYOR_b3-K9abvGg72WIo`, // or process.env.CONTENTFUL_TOKEN
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-transformer-remark`,
  ],
};
