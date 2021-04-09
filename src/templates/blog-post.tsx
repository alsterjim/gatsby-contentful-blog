import React from "react"
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
  const post = data.contentfulBlogPost
  var i = 1
  i = "test"
  return (
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{__html: post.body.childMarkdownRemark.html}}/>
      </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug } ) {
      title
      slug
      body {
        childMarkdownRemark {
          html
        }
      } 
    }
  }
`