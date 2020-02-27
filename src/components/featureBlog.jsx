import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import "../pages/pages.css"

const ImageList = styled.ul`
  display: flex;
  flex-flow: row wrap;
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

const FeatureBlog = ({ data }) => {
  return (
    <>
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
    </>
  )
}

export default FeatureBlog
