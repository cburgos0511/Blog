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
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
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
          <div className="container-about">
            <div className="about-img">
              <Img fluid={doc.node.img.childImageSharp.fluid} />
            </div>
            <div className="content-wrapper">
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
          </div>
        </div>
      ))}
    </>
  </Layout>
)

export default About
