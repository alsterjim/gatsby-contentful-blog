module.exports = {
    plugins: 
    [
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: `q4furp8uan13`, // or process.env.CONTENTFUL_SPACE_ID
          accessToken: `jLICHLw0_i93cg-lUSZcbcfoYOR_b3-K9abvGg72WIo`, // or process.env.CONTENTFUL_TOKEN
        },
      },
      `gatsby-transformer-remark`
    ]
}