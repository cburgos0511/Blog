import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import "../pages/pages.css"

const FeatureContainer = styled.div`
  position: relative;
  &::before {
    content: "";
    top: -30%;
    position: absolute;
    width: 20vw;
    height: 1.2px;
    left: 50%;
    background: #6d8a87;
    transform: translate(-50%);
  }
  .title-wrap {
    width: 50%;
    margin-top: 30%;
    margin-left: 5vw;

    .title {
      font-size: 10vh;
      font-weight: 400;
    }
  }
`
const ImageList = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin-top: 15vh;
  margin-bottom: 30vh;
  h1 {
  }
  a {
    text-decoration: none;
    color: #000;
    margin-left: 18px;
    li {
      list-style: none;
      h6 {
        margin-top: 2vh;
        font-size: 12px;
        font-weight: 400;
        text-transform: uppercase;
        color: #a3a3a3;
        letter-spacing: 2px;
      }
      h2 {
        font-family: Roboto;
        font-weight: 700;
        font-size: 16px;
      }
      .img-wrapper {
        overflow: hidden;
      }
    }
  }
`

const FeatureBlog = ({ data, title }) => {
  return (
    <FeatureContainer>
      <div className="title-wrap">
        <h1 className="title"> {title}</h1>
      </div>
      <ImageList>
        {data.edges.slice(0, 2).map(doc => (
          <Link to={`/${doc.node.id}/`}>
            <li key={doc.node.id}>
              <div className="img-wrapper">
                <Img
                  className="blog-img"
                  fixed={doc.node.img.childImageSharp.fixed}
                />
              </div>
              <h6>{doc.node.category}</h6>
              {/* || */}
              <h6>{doc.node.Category}</h6>
              <h2>{doc.node.title}</h2>
              {/* <p>{doc.node.description}</p> */}
            </li>
          </Link>
        ))}
      </ImageList>
    </FeatureContainer>
  )
}

export default FeatureBlog
