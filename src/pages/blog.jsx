import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export const articleQuery = graphql`
  query MyQuery {
    allStrapiArticle {
      edges {
        node {
          description
          id
          published
          title
          user {
            username
          }
          img {
            childImageSharp {
              fixed(width: 300, height: 225) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => (
  <Layout>
    <h1>Welcome to my Blog</h1>
    <p>Blog stuff</p>
    <ul>
      {data.allStrapiArticle.edges.map(doc => (
        <li key={doc.node.id}>
          <h2>
            <Link to={`/${doc.node.id}/`}>{doc.node.title}</Link>
          </h2>
          <Img fixed={doc.node.img.childImageSharp.fixed} />
          <p>{doc.node.description}</p>
          <h6>Written by: {doc.node.user.username}</h6>
        </li>
      ))}
    </ul>
  </Layout>
)

export default Blog
