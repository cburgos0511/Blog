import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Ul = styled.ul`
  display: flex;
  margin: 15px auto 5px auto;
  .mr-left {
    margin-left: 8vw;
  }
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
      <li className="mr-left">
        <Link activeClassName="active" to="/about/">
          About
        </Link>
      </li>
      <li className="mr-left">
        <Link activeClassName="active" to="/blog/">
          Blogs
        </Link>
      </li>
      <li className="mr-left">
        <Link activeClassName="active" to="/projects/">
          Projects
        </Link>
      </li>
    </Ul>
  )
}

const Header = () => (
  <header
    style={{
      background: `#fcfcfc`,
      marginBottom: `.6rem`,
      display: "flex",
    }}
  >
    {navbar()}
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
