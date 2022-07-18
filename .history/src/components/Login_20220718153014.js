import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src='/images/cta-logo-one.svg' />
      </CTA>
    </Container>
  )
}

export default Login
const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);

  &::before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('/images/login-background.jpg');
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`
const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
`
const CTALogoOne = styled.img``
