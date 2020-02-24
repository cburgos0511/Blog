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
  }
`

const navbar = () => {
  return (
    <Ul>
      <li>
        <Link to="/">Home</Link>
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
