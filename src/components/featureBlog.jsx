import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import "../pages/pages.css"

const FeatureContainer = styled.div`
  position: relative;
  &::before {
    content: "";
    top: -10rem;
    position: absolute;
    width: 20vw;
    height: 1.2px;
    left: 50%;
    background: #6d8a87;
    transform: translate(-50%);
  }
  .title-wrap {
    width: 70%;
    margin-top: 30%;
    margin-left: 5vw;

    .title {
      font-family: PT serif;
      font-size: 12vh;
      font-weight: 400;
    }
  }
  @media (max-width: 768px) {
    &::before {
      content: "";
      top: -20px;
    }
    .title-wrap {
      margin-top: 20%;
      text-align: center;
      .title {
        font-size: 8vw;
      }
    }
  }
`
const ImageList = styled.ul`
  margin-left: 0;
  display: flex;
  flex-flow: row wrap;
  margin-top: 15vh;
  h1 {
  }
  a {
    text-decoration: none;
    color: #000;
    margin-left: 18px;
    width: 46%;
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
        .blog-img {
          transition: all 2000ms cubic-bezier(0.35, 0.9, 0.5, 1);
          width: 100%;
          margin: 0;
          &:hover {
            transform: scale(1.1);
            z-index: 2;
            box-shadow: 3px 20px 78px -50px rgba(0, 0, 0, 0.75);
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    a {
      width: 100%;
      margin: 10px 0 90px 0;
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
          <Link key={doc.node.id} to={`/${doc.node.id}/`}>
            <li>
              <div className="img-wrapper">
                <Img
                  className="blog-img"
                  fluid={doc.node.img.childImageSharp.fluid}
                />
              </div>
              <h6>{doc.node.category}</h6>
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
