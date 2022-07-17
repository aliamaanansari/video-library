import React from 'react'
import styled from 'styled-components'
function Header() {
  return (
    <Nav>
      <Logo src='/images/logo.svg' />
      <NavMenu>
        <a>
          <img src='/images/home-icon.svg' alt='' />
          <span>HOME</span>
        </a>
        <a>
          <img src='/images/search-icon.svg' alt='' />
          <span>SEARCH</span>
        </a>
        <a>
          <img src='/images/watchlist-icon.svg' alt='' />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src='/images/original-icon.svg' alt='' />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src='/images/movie-icon.svg' alt='' />
          <span>MOVIES</span>
        </a>
        <a>
          <img src='/images/series-icon.svg' alt='' />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src='/images/userimg.jpg' />
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`
const Logo = styled.img`
  width: 88px;
`
const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;

      &:after {
        content: 'Gello';
        height: 2px;
        background: white;
      }
    }
  }
`
const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`
