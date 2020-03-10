import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import styled from "styled-components"
import "./pages.css"

const ImageList = styled.ul`
  margin-left: 0;
  display: flex;
  flex-flow: row wrap;
  a {
    text-decoration: none;
    color: #000;
    margin: 5vw auto;
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
  @media (max-width: 388px) {
    img {
      height: 80%;
      width: 80%;
    }
    a {
      margin-bottom: 5.5rem;
    }
  }
`

const Blog = ({ data }) => (
  <Layout>
    <h1 className="header">Blog</h1>
    <ImageList>
      {data.allStrapiArticle.edges.map(doc => (
        <Link key={doc.node.id} to={`/${doc.node.id}`}>
          <li>
            <div className="img-wrapper">
              <Img
                className="blog-img"
                fixed={doc.node.img.childImageSharp.fixed}
              />
            </div>
            <h6>{doc.node.category}</h6>
            <h2>{doc.node.title}</h2>
            {/* <p>{doc.node.description}</p> */}
          </li>
        </Link>
      ))}
    </ImageList>
  </Layout>
)

export const articleQuery = graphql`
  query MyQuery {
    allStrapiArticle {
      edges {
        node {
          description
          id
          published
          title
          category
          user {
            username
          }
          img {
            childImageSharp {
              fixed(width: 375, height: 325) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`

export default Blog
