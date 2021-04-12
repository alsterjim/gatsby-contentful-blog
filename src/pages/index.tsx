import * as React from "react";
import { graphql, Link } from "gatsby";

const IndexPage = ({ data }) => (
  <div>
    <h1>Jim's Gatsby + Contentful Blog</h1>
    <ul>
      {data.allContentfulBlogPost.edges.map(({ node, index }) => (
        <li key={index}>
          <Link to={`${node.slug}`}>{node.title}</Link>
          <div>
            <img src={node.heroImage.resize.src} alt="" />
          </div>
          <div>{node.body.childMarkdownRemark.excerpt}</div>
        </li>
      ))}
    </ul>
  </div>
);

export default IndexPage;

export const query = graphql`
  {
    allContentfulBlogPost(sort: { fields: [updatedAt] }) {
      edges {
        node {
          title
          slug
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          heroImage {
            resize(width: 300, height: 300) {
              src
            }
          }
        }
      }
    }
  }
`;
