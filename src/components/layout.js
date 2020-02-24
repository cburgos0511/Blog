import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import styled from "styled-components"

const Footer = styled.footer`
  height: 50vh;
  background: #000;
  .col {
    max-width: 900px;
    border-bottom: 3px solid white;
    margin: auto;
  }
`
const Ul = styled.ul`
  display: flex;

  li {
    cursor: pointer;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15vh;

    a {
      color: #fff;
      text-decoration: none;
      text-transform: uppercase;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 800;
    }
  }
`

const footbar = () => {
  return (
    <Ul>
      <li>
        <Link className="mr-left" to="/">
          Home
        </Link>
      </li>
      <li className="mr-left">
        <Link to="/about/">About</Link>
      </li>
      <li className="mr-left">
        <Link to="/blog/">Blogs</Link>
      </li>
      <li className="mr-left">
        <Link to="/projects/">Projects</Link>
      </li>
    </Ul>
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
      <div
        style={{
          margin: `0 auto`,
          maxWidth: "90vw",
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer>
        <div className="col">{footbar()}</div>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
