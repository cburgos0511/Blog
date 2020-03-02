// import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
        <AniLink activeClassName="active" fade to="/">
          Home
        </AniLink>
      </li>
      <li>
        <AniLink activeClassName="active" fade to="about">
          About
        </AniLink>
      </li>
      <li>
        <AniLink activeClassName="active" fade to="blog">
          Blogs
        </AniLink>
      </li>
      <li>
        <AniLink activeClassName="active" fade to="projects">
          Projects
        </AniLink>
      </li>
    </Ul>
  )
}

const Header = () => (
  <Head>
    <nav className="navbar">{navbar()}</nav>
  </Head>
)

export default Header
