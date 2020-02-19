import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import ReactMarkdown from "react-markdown"

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticle.title}</h1>
    <p>
      by <Link to="/about">{data.strapiArticle.user.username}</Link>
    </p>
    <Img fixed={data.strapiArticle.img.childImageSharp.fixed} />
    <ReactMarkdown
      source={data.strapiArticle.content}
      transformImageUri={uri =>
        uri.startsWith("http") ? uri : `${process.env.IMAGE_BASE_URL}${uri}`
      }
    />
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      id
      title
      content
      user {
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
