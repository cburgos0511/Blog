import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"

export const bioQuery = graphql`
  query BioQuery {
    allStrapiBio {
      edges {
        node {
          aboutMe
          author
          img {
            childImageSharp {
              fixed(width: 400, height: 325) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`
const About = ({ data }) => (
  <Layout>
    <>
      {data.allStrapiBio.edges.map(doc => (
        <div>
          <h1>{doc.node.author}</h1>
          <Img fixed={doc.node.img.childImageSharp.fixed} />
          <ReactMarkdown source={doc.node.aboutMe} />
        </div>
      ))}
    </>
  </Layout>
)

export default About
