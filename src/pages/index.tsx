import * as React from "react";
import { graphql, Link } from "gatsby";

interface IData {
  data: any;
}

interface IContentfulData {
  node: any;
  index: any;
}

const IndexPage = ({ data }: IData) => (
  <div class="container">
    <h1 class="text-center">Jim's Gatsby + Contentful Blog</h1>
    <div class="row">
      {data.allContentfulBlogPost.edges.map(
        ({ node, index }: IContentfulData) => (
          <div class="col-lg-4">
            <div class="text-center">
              <Link to={`${node.slug}`}>{node.title}</Link>

              <div>
                <img src={node.heroImage.resize.src} alt="" />
              </div>
              <div>{node.body.childMarkdownRemark.excerpt}</div>
            </div>
          </div>
        )
      )}
    </div>
  </div>
);

export default IndexPage;

export const query = graphql`
  {
    allContentfulBlogPost(sort: { fields: [updatedAt], order: DESC }) {
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
            resize(width: 350, height: 350) {
              src
            }
          }
        }
      }
    }
  }
`;
