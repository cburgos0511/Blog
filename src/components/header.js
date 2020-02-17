import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Ul = styled.ul`
  display: flex;
  margin: 25px 0 0 800px;
  li {
    cursor: pointer;
    list-style: none;
    margin-left: 2rem;

    a {
      color: white;
      text-decoration: none;
    }
  }
`

const navbar = () => {
  return (
    <Ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about/">About</Link>
      </li>
      <li>
        <Link to="/blog/">Blogs</Link>
      </li>
      <li>
        <Link to="/projects/">Projects</Link>
      </li>
    </Ul>
  )
}

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `.6rem`,
      display: "flex",
    }}
  >
    <div
      style={{
        maxWidth: 400,
        margin: "0 0 0 20px",
        padding: `.75rem .0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div
      style={{
        textAlign: "right",

        margin: `auto 20px auto 0`,
        maxWidth: 700,
        padding: `1.45rem 1.0875rem`,
        height: "auto",
      }}
    ></div>
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
