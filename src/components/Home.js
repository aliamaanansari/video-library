import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectMovies } from '../features/movie/movieSlice'
import { useGetMovies } from '../hooks'
import ImageSlider from './ImageSlider'
import Movies from './Movies'
import Viewers from './Viewers'

function Home() {
  const movies = useSelector(selectMovies)

  useGetMovies()

  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Movies movies={movies} isRecommeded={true} />
    </Container>
  )
}

export default Home

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
