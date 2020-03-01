import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Head = styled.header`
  background: #fcfcfc;
  .navbar {
    width: 50%;
    margin: 0 auto 0 auto;
  }
`

const Ul = styled.ul`
  margin-block-start: 0;
  margin-block-end: 0;
  display: flex;
  margin-top: 10px;
  justify-content: space-around;
  margin-left: 0;

  li {
    position: relative;
    cursor: pointer;
    list-style: none;

    a {
      color: #000;
      text-decoration: none;
      text-transform: uppercase;
      font-family: Roboto;
      font-size: 16px;
      font-weight: 800;
      &::before {
        content: "";
        position: absolute;
        opacity: 0.4;
        right: -15%;
        width: 0%;
        height: 60%;
        bottom: 10%;
        background: #97bdb9;
        transition: all 500ms ease;
      }
      &:hover::before {
        width: 130%;
      }
    }
    .active {
      &::before {
        content: "";
        position: absolute;
        opacity: 0.4;
        left: -15%;
        width: 130%;
        height: 60%;
        bottom: 10%;
        background: #97bdb9;
      }
    }
  }
`

const navbar = () => {
  return (
    <Ul>
      <li>
        <Link activeClassName="active" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link activeClassName="active" to="/about/">
          About
        </Link>
      </li>
      <li>
        <Link activeClassName="active" to="/blog/">
          Blogs
        </Link>
      </li>
      <li>
        <Link activeClassName="active" to="/projects/">
          Projects
        </Link>
      </li>
    </Ul>
  )
}

const Header = () => (
  <Head>
    <nav class="navbar">{navbar()}</nav>
  </Head>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
