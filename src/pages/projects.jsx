import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"

export const articleQuery = graphql`
  query MyProjects {
    allStrapiProject {
      edges {
        node {
          id
          title
          time
          description
          builder {
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

const Project = ({ data }) => (
  <Layout>
    <h1>Welcome to my Projects</h1>
    <p>Projects Stuff</p>
    <ul>
      {data.allStrapiProject.edges.map(doc => (
        <li key={doc.node.id}>
          <h2>
            <Link to={`/${doc.node.id}/`}>{doc.node.title}</Link>
          </h2>
          <Img fixed={doc.node.img.childImageSharp.fixed} />
          <p>{doc.node.description}</p>
          <h6>Built by: {doc.node.builder.username}</h6>
        </li>
      ))}
    </ul>
  </Layout>
)

export default Project
