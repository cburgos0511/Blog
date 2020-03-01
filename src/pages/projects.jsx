import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import styled, { keyframes } from "styled-components"
import "./pages.css"

const blur = keyframes`
0 {
  filter: blur(0);
}
50% {
  filter: blur(1px);

}

100% {
  filter: blur(0);

}
`
const ProjectList = styled.ul`
  position: relative;
  margin: 15vh 0 15vh 0;
  a {
    text-decoration: none;
    color: #000;
  }
  .lefty {
    justify-content: flex-end;
  }
  li {
    position: relative;
    display: flex;
    padding-top: 20vh;
    margin-top: 20vh;
    &:after {
      content: "";
      opacity: 0.36;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10vw;
      height: 1.5px;
      background: #6d8a87;
    }
    .img-wrap {
      &:hover {
        animation: ${blur} 1s linear;
      }
    }
    .right {
      margin-left: 5vw;
    }
    .left {
      margin-right: 5vw;
    }
    .cont {
      margin-top: 10vh;
      h2 {
        font-family: PT serif;
        font-size: 6vh;
        margin-bottom: 6vh;
      }
      p {
        font-family: PT serif;
        margin-top: 4vh;
        width: 20vw;
      }
    }
  }
`

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
              fixed(width: 700, height: 525) {
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
    <h1 className="header">Projects</h1>
    <ProjectList>
      {data.allStrapiProject.edges.map((doc, i) => {
        const project =
          i % 2 === 0 ? (
            <Link to={`/${doc.node.id}/`}>
              <li key={doc.node.id}>
                <div className="img-wrap">
                  <Img fixed={doc.node.img.childImageSharp.fixed} />
                </div>
                <div className="right cont">
                  <h2>{doc.node.title}</h2>
                  {/* <h6 className="creator">{doc.node.builder.username}</h6> */}
                  <p>{doc.node.description}</p>
                </div>
              </li>
            </Link>
          ) : (
            <Link to={`/${doc.node.id}/`}>
              <li className="lefty" key={doc.node.id}>
                <div className="cont left">
                  <h2>{doc.node.title}</h2>
                  {/* <h6 className="creator">{doc.node.builder.username}</h6> */}
                  <p>{doc.node.description}</p>
                </div>
                <div className="img-wrap">
                  <Img fixed={doc.node.img.childImageSharp.fixed} />
                </div>
              </li>
            </Link>
          )
        return project
      })}
    </ProjectList>
  </Layout>
)

export default Project
