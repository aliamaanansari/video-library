import React from 'react'
import styled from 'styled-components'
function Login() {
  return <Container></Container>
}

export default Login
const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);

  &::before {
    background-image: url('/images/login-background.jpg');
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
`
