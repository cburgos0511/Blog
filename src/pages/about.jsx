import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import "./pages.css"

export const bioQuery = graphql`
  query BioQuery {
    allStrapiBio {
      edges {
        node {
          aboutMe
          author
          img {
            childImageSharp {
              fixed(width: 600, height: 525) {
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
          <h1 className="header">{doc.node.author}</h1>
          <div style={{ margin: "0 auto" }}>
            <Img
              style={{ display: "block", margin: "auto" }}
              fixed={doc.node.img.childImageSharp.fixed}
            />
          </div>
          <ReactMarkdown
            className="bio-content"
            source={doc.node.aboutMe}
            transformImageUri={uri =>
              uri.startsWith("http")
                ? uri
                : `${process.env.IMAGE_BASE_URL}${uri}`
            }
          />
        </div>
      ))}
    </>
  </Layout>
)

export default About
