import React from 'react'
import styled from 'styled-components'
function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src='/images/viewers-disney.png' alt='' />
      </Wrap>
      <Wrap>
        <img src='/images/viewers-disney.png' alt='' />
      </Wrap>
      <Wrap>
        <img src='/images/viewers-disney.png' alt='' />
      </Wrap>
      <Wrap>
        <img src='/images/viewers-disney.png' alt='' />
      </Wrap>
    </Container>
  )
}

export default Viewers

const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`
const Wrap = styled.div``
