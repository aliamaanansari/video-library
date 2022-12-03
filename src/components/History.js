import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { selectHistory } from '../features/history/historySlice'

const History = () => {
  const history = useSelector(selectHistory)
  console.log({ history })
  return (
    <Container>
      <Header>
        <PageHeading>History</PageHeading>
        <DeleteBtn>
          <img src='/images/trash.png' alt='' />
          <span>Delete History</span>
        </DeleteBtn>
      </Header>
      <HistoryContainer>
        {!!history.length &&
          history.map((item, index) => {
            return (
              <Link to={`/detail/${item.id}`} key={item.id}>
                <HistBox isLast={index + 1 === history.length}>
                  <ImgBox src={item.posterUrl}></ImgBox>
                  <DetailsBox>
                    <TitleBox>
                      <MovieTitle>{item.title}</MovieTitle>
                      <LastWatched>
                        {new Date(item.lastWatched).toLocaleString('en-IN')}
                      </LastWatched>
                    </TitleBox>
                    <MovieDescription>
                      {item.description} {item.description} {item.description}{' '}
                      {item.description} {item.description}
                    </MovieDescription>
                  </DetailsBox>
                </HistBox>
              </Link>
            )
          })}
      </HistoryContainer>
    </Container>
  )
}

export default History
const HistoryContainer = styled.div`
  /* height: calc(100vh-600px); */
  /* overflow: auto; */
`
const LastWatched = styled.div`
  white-space: nowrap;
`
const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;

  overflow-x: hidden;
  &:before {
    background: url('/images/home-background.png') center center / cover
      no-repeat fixed;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`
const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const PageHeading = styled.h1`
  color: while;
  text-size: 2px;
`

const DeleteBtn = styled.button`
  height: min-content;
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;

  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }
`
const HistBox = styled.div`
  cursor: pointer;
  border-radius: 8px;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: ${(props) => (props.isLast ? '0px' : '1rem')};
  display: flex;
  flex-direction: row;
  background-color: #090b13;
  overflow: hidden;
  transition: all 0.2s ease-in;
  &:hover {
    transform: scale(1.02);
  }
`
const ImgBox = styled.img`
  max-width: 200px;
  max-height: 200px;
  object-fit: cover;
`
const DetailsBox = styled.div`
  padding: 1.5rem;
  height: 100%;
`
const MovieTitle = styled.div`
  line-height: 2rem;
  font-size: 1.5rem;
  width: 60%;
`
const MovieDescription = styled.div`
  padding-top: 1rem;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`
