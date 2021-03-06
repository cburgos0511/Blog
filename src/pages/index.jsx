import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import "./pages.css"
import FeatureBlog from "../components/featureBlog"
import FeatureProject from "../components/featureProject"

const Welcome = styled.div`
  .intro {
    text-shadow: -20px 20px 20px rgba(255, 255, 255, 0.2),
      0 20px 50px rgba(255, 255, 255, 0.2);
    position: relative;
    margin: 20vh 0 1vh 0;
    letter-spacing: -2px;
    .inline {
      display: flex;
      width: 80vw;
      margin: 0 10vw 0 10vw;
      height: 20vh;
      font-size: 11vw;
      font-weight: 500;
      font-family: PT serif;
    }
  }
  .little-about-me {
    position: relative;
    margin: 0 0 5rem 22vw;
    width: 50vw;
    h2 {
      font-family: PT serif;
      padding-top: 5vh;
      font-size: 19px;
      font-weight: 400;
      color: #525252;
      line-height: 1.8;
    }
  }
  @media (max-width: 768px) {
    .intro {
      margin: 22vw auto 4rem 2rem;

      .inline {
        height: 15vw;
        font-size: 14vw;
        margin: 0;
        div {
          height: 5vw;
        }
      }
    }
    .little-about-me {
      margin: auto;
      width: 80%;
      h2 {
        font-size: 17px;
      }
    }
  }
`

const Icons = styled.div`
  width: 40vw;
  margin: auto;
  position: relative;
  ul {
    display: flex;
    &::before {
      content: "";
      position: absolute;
      width: 10vw;
      height: 1px;
      background: #97bdb9;
      left: -9vw;
      top: 13px;
    }
    li {
      list-style: none;
      padding-left: 2rem;
      a {
        color: black;
        text-decoration: none;
        cursor: pointer;
        font-size: 24px;
        font-weight: 700;
        transition: all 500ms ease-in-out;
        &:hover {
          color: #97bdb9;
        }
      }
    }
  }
  @media (max-width: 768px) {
    width: 40vw;
    ul {
      justify-content: space-around;
    }
  }
`

const Home = ({ data }) => (
  <Layout>
    <Welcome>
      <div className="intro">
        <div className="inline">
          <div>F</div>
          <div>a</div>
          <div>i</div>
          <div>t</div>
          <div>h</div>
          <div>.&nbsp; </div>
          <div>F</div>
          <div>a</div>
          <div>m</div>
          <div>i</div>
          <div>l</div>
          <div>y</div>
          <div>. </div>
        </div>
        <div className="inline">
          <div>N</div>
          <div>a</div>
          <div>p</div>
          <div>s</div>
          <div>.&nbsp; </div>
          <div>A</div>
          <div>r</div>
          <div>t</div>
          <div>. </div>
        </div>
        <div className="inline">
          <div>U</div>
          <div>p</div>
          <div>h</div>
          <div>o</div>
          <div>l</div>
          <div>s</div>
          <div>t</div>
          <div>e</div>
          <div>r</div>
          <div>y</div>
          <div>.</div>
        </div>
      </div>
      <Icons>
        <ul>
          <li>
            <a href="https://www.instagram.com/intheburgoshouse/">In</a>
          </li>
          <li>
            <a href="https://www.facebook.com/christine.mancuso.14">F</a>
          </li>
          <li>
            <a href="https://www.pinterest.com/christinenm/">P</a>
          </li>
          <li>
            <a href="mailto:christinenicolem96@gmail.com">G</a>
          </li>
        </ul>
      </Icons>
      <div className="little-about-me">
        <h2>
          My name is <b>Christine</b>
          <b> Burgos</b>. I’m a lifelong <b>Omaha</b> native,
          <b> one of six children</b>, believer in the saving work of the
          <b> Lord Jesus Christ</b>. Welcome to my site. Here I intend to
          catalog and share my endeavors in <b>upholstery</b>, <b>cooking</b>,
          and <b>homemaking</b>. As well as this new stage I’m starting as a
          <b> wife and mother.</b>
        </h2>
      </div>
    </Welcome>
    <FeatureBlog data={data.allStrapiArticle} title="Latest Blogs" />
    <FeatureProject data={data.allStrapiProject} title="Latest Projects" />
  </Layout>
)

export const featureQuery = graphql`
  query query {
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
          articleImg {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    allStrapiProject {
      edges {
        node {
          id
          title
          time
          category
          description
          builder {
            username
          }
          projectImg {
            childImageSharp {
              fluid(maxWidth: 900) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

export default Home
