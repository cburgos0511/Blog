import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import "./layout.css"
import styled from "styled-components"

const Main = styled.main`
  margin: 0 auto 20vw auto;
  max-width: 90vw;
  padding: 0 1.0875rem 1.45rem;
  @media (max-width: 378px) {
    padding: 0;
    max-width: 98vw;
  }
`
const Footer = styled.footer`
  position: relative;
  margin-top: 0vh;
  height: 40vh;
`
const FootContent = styled.ul`
  .square-wrap {
    margin-top: 30px;
    height: 15vh;
    position: relative;

    .square {
      position: absolute;
      top: 20%;
      left: 50%;
      width: 30px;
      height: 30px;
      border: 2px #97bdb9 solid;
      transform: rotate(45deg);
    }
  }
  .info {
    text-align: center;
    ul {
      li {
        list-style: none;
        font-size: 14px;

        a {
          text-decoration: none;
          color: #97bdb9;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .square-wrap {
      height: 15vh;
      margin: 30px auto 0 auto;
      position: relative;

      .square {
        position: absolute;
        top: 20%;
        left: 48%;
        width: 30px;
        height: 30px;
        border: 2px #97bdb9 solid;
        transform: rotate(45deg);
      }
    }
    .info {
      text-align: center;
      ul {
        margin-left: 0;
        li {
          list-style: none;
          font-size: 14px;

          a {
            text-decoration: none;
            color: #97bdb9;
          }
        }
      }
    }
  }
`
const Icons = styled.div`
  position: relative;
  ul {
    margin-left: 0;
    position: absolute;
    display: flex;
    left: 50%;
    transform: translate(-50%);
    &::before {
      content: "";
      position: absolute;
      width: 14vw;
      height: 1px;
      background: #97bdb9;
      top: -100%;
      left: 50%;
      transform: translate(-50%);
    }
    li {
      list-style: none;
      padding-right: 1.5rem;
      padding-left: 1.5rem;

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
`

const footbar = () => {
  return (
    <FootContent>
      <div className="square-wrap">
        <div className="square"></div>
      </div>
      <div className="info">
        <ul>
          <li>© 2020 - {new Date().getFullYear()}</li>
          <li>
            Build <a href="https://www.gatsbyjs.org/">Gatsby </a> &
            <a href="https://strapi.io/"> Strapi</a>
          </li>
          <li>
            Designed and Developed by
            <a href="mailto:cburgos0511@gmail.com"> Cruz Burgos</a>
          </li>
        </ul>
      </div>
    </FootContent>
  )
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <Main>{children}</Main>
      </div>
      <Footer>{footbar()}</Footer>
      <Icons>
        <ul>
          <li>
            <a href="/">In</a>
          </li>
          <li>
            <a href="/">F</a>
          </li>
          <li>
            <a href="/">P</a>
          </li>
          <li>
            <a href="mailto:christinenicolem96@gmail.com">G</a>
          </li>
        </ul>
      </Icons>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
