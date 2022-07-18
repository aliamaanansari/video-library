import React from 'react'
import styled from 'styled-components'

function Detail() {
  return <Container>
    <BackGround>
<img src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg'

    </BackGround>
  </Container>
}

export default Detail

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 09 calc(3.5vw + 5px);

`
