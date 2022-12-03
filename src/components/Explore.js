import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Movies from './Movies'
import jsonData from '../db.json'
import { useSelector } from 'react-redux'
import { selectMovies } from '../features/movie/movieSlice'
import { useGetMovies } from '../hooks'

const Explore = () => {
  useGetMovies()
  const movies = useSelector(selectMovies)
  const [selectedMovies, setSelectedMovies] = useState([])
  const [selectedGenres, setSelectedGenres] = useState([])

  useEffect(() => {
    if (movies.length) {
      if (!selectedGenres.length) {
        setSelectedMovies(movies)
      }
      const filteredMovies = movies.filter((movie) => {
        const selectedCat = selectedGenres.join(',').toLowerCase()
        return !!movie.genres.find((genre) =>
          selectedCat.includes(String(genre).toLowerCase())
        )
      })
      if (filteredMovies.length) {
        setSelectedMovies([...filteredMovies])
      }
    }
  }, [selectedGenres, movies])

  const onSelect = (genre) => {
    if (genre === 'all') {
      if (selectedGenres.length === jsonData.genres.length) {
        setSelectedGenres([])
        return
      }
      setSelectedGenres(jsonData.genres)
      return
    }
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre))
    } else {
      setSelectedGenres([...selectedGenres, genre])
    }
  }

  return (
    <Container>
      <Genres>
        <Genre
          onClick={() => onSelect('all')}
          selected={selectedGenres.length === jsonData.genres.length}>
          All
        </Genre>
        {jsonData.genres.map((genre) => (
          <Genre
            onClick={() => onSelect(genre)}
            selected={selectedGenres.includes(genre)}>
            {genre}
          </Genre>
        ))}
      </Genres>
      <Movies movies={selectedMovies} isRecommended={false} />
    </Container>
  )
}

export default Explore

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
const Genres = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0 0.5rem 0;
  margin-bottom: 0.5rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    background: none;
    height: 4px;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: grey;
    border-radius: 4px;
  }
`
const Genre = styled.button`
  background: #6369a6;
  background: ${(props) => (props.selected ? '#6369a6' : 'none')};
  color: ${(props) => (props.selected ? '#bdc3fc' : '#fefefe')};
  border: ${(props) => (props.selected ? 'none' : '1px solid grey')};
  border-radius: 150px;
  cursor: pointer;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  font-weight: 600;
  white-space: nowrap;
  &:hover {
    background: #6369a6;
    color: #bdc3fc;
    border: 1px solid ${(props) => (props.selected ? 'none' : 'transparent')};
  }
`
