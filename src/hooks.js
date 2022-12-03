import { collection, onSnapshot } from 'firebase/firestore'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setMovies } from './features/movie/movieSlice'
import db from './firebase'

export const useGetMovies = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('tempMovies')
    onSnapshot(collection(db, 'movies'), (snapshot) => {
      let tempMovies = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        }
      })
      console.log({ tempMovies })
      dispatch(setMovies(tempMovies))
    })
  }, [dispatch])
}
