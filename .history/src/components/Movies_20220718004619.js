import React from 'react'
import styled from 'styled-components'

function Movies() {
  return (
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        <Wrap>
          <img
            src='https://www.pngegg.com/en/search?q=art+-+movie'
            alt=''></img>
        </Wrap>
      </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div``

const Content = styled.div``
