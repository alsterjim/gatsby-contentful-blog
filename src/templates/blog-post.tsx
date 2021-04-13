import React from "react";
import { graphql } from "gatsby";

interface IBlogPost {
  data: any;
}

export default function BlogPost({ data }: IBlogPost) {
  const post = data.contentfulBlogPost;
  return (
    <div class="container">
      <h1>{post.title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: post.body.childMarkdownRemark.html }}
      />
    </div>
  );
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
