import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"

export const query = graphql`
  query ProjectTemplate($id: String!) {
    strapiProject(id: { eq: $id }) {
      id
      title
      content
      builder {
        id
        username
      }
      img {
        childImageSharp {
          fixed(width: 400, height: 325) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
`
const ProjectTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiProject.title}</h1>
    <p>
      by <Link to="/about">{data.strapiProject.builder.username}</Link>
    </p>
    <Img fixed={data.strapiProject.img.childImageSharp.fixed} />
    <ReactMarkdown
      source={data.strapiProject.content}
      transformImageUri={uri =>
        uri.startsWith("http") ? uri : `${process.env.IMAGE_BASE_URL}${uri}`
      }
    />
  </Layout>
)

export default ProjectTemplate
