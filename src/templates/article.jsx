import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"
import styled from "styled-components"

const IndividualBlog = styled.div`
  position: relative;
  .article-title {
    width: 60%;
    margin: 10% auto;
    text-align: left;
    p {
      text-align: left;
      font-size: 14px;
      font-weight: 500;
      color: #525252;
    }
    h6 {
      position: relative;
      font-size: 14px;
      font-weight: 500;
      text-align: right;
      width: 30%;
      margin-left: 60%;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 35%;
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
  .blog-content {
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
  @media (max-width: 768px) {
    .blog-content {
      width: 90%;
    }
    .article-title {
      width: 80%;
      h1 {
        font-size: 10vw;
      }
      h6 {
        width: 60%;
        font-size: 3vw;
        margin-left: 40%;
        &::before {
          background: transparent;
        }
      }
    }
  }
`

const ArticleTemplate = ({ data }) => (
  <Layout>
    <IndividualBlog>
      <div className="article-title">
        <p>{data.strapiArticle.created_at.slice(0, 10)}</p>
        <h1>{data.strapiArticle.title}</h1>
        <h6>
          <Link to="/about">{data.strapiArticle.user.username}</Link>
        </h6>
      </div>
      <div className="img-wrap">
        <Img fluid={data.strapiArticle.articleImg.childImageSharp.fluid} />
      </div>
      <div className="blog-content">
        <ReactMarkdown
          source={data.strapiArticle.content}
          transformImageUri={uri =>
            uri.startsWith("http") ? uri : `${process.env.IMAGE_BASE_URL}${uri}`
          }
        />
      </div>
    </IndividualBlog>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      id
      title
      content
      created_at
      user {
        id
        username
      }
      articleImg {
        childImageSharp {
          fluid(maxWidth: 1000, maxHeight: 950) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
