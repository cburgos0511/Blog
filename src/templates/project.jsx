import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"

const IndividualProject = styled.div`
  position: relative;
  .project-title {
    width: 60%;
    margin: 10% auto;
    text-align: left;
    p {
      text-align: left;
      font-size: 14px;
      font-weight: 500;
      color: #525252;
      text-transform: capitalize;
    }
    h6 {
      position: relative;
      font-size: 14px;
      font-weight: 500;
      text-align: right;
      width: 20%;
      margin-left: 80%;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 10%;
        height: 1px;
        width: 20px;
        background: #525252;
      }
      a {
        text-decoration: none;
        color: #525252;
      }
    }
    h1 {
      font-family: PT Serif;
      font-size: 9vh;
      text-transform: capitalize;
      font-weight: 400;
    }
  }
  .img-wrap {
    position: relative;
    width: 60%;
    margin: 0 auto 10vh auto;
  }
  .project-content {
    font-family: PT Serif;
    position: relative;
    width: 60%;
    margin: auto;
    h1 {
      font-family: PT Serif;
    }
    h2 {
      font-family: PT Serif;
    }
    h3 {
      font-family: PT Serif;
    }
    p {
      font-weight: 300;
      line-height: 1.5rem;
    }
  }
`
export const query = graphql`
  query ProjectTemplate($id: String!) {
    strapiProject(id: { eq: $id }) {
      id
      title
      content
      created_at
      time
      builder {
        id
        username
      }
      img {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 950) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
const ProjectTemplate = ({ data }) => (
  <Layout>
    <IndividualProject>
      <div className="project-title">
        <p>Duration: {data.strapiProject.time}</p>
        <h1>{data.strapiProject.title}</h1>
        <h6>
          <Link to="/about">{data.strapiProject.builder.username}</Link>
        </h6>
      </div>
      <div className="img-wrap">
        <Img fluid={data.strapiProject.img.childImageSharp.fluid} />
      </div>
      <div className="project-content">
        <ReactMarkdown
          source={data.strapiProject.content}
          transformImageUri={uri =>
            uri.startsWith("http") ? uri : `${process.env.IMAGE_BASE_URL}${uri}`
          }
        />
      </div>
    </IndividualProject>
  </Layout>
)

export default ProjectTemplate
