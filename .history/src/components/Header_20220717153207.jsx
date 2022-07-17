import React from 'react'
import styled from 'styled-components'
function Header() {
  return (
    <Nav>
      <Logo src='/images/logo.svg' />
      <NavMenu></NavMenu>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 s36px;
`
const Logo = styled.img`
  width: 88px;
`
const NavMenu = styled.div``
