import { addDoc, collection } from 'firebase/firestore'
import jsonData from './db.json'
import db from './firebase'

// migration code to populate firestore from local json.
// use with precaution
let runCount = 0
export const addDataToFireBase = () => {
  if (runCount < 1) {
    runCount += 1
    jsonData.movies.forEach(async (movie) => {
      delete movie.id
      movie.posterUrl = String(movie.posterUrl).replace('http:', 'https:')
      try {
        const docRef = await addDoc(collection(db, 'movies'), {
          cardImg: movie.posterUrl,
          category: JSON.stringify(movie.genres),
          description: movie.plot,
          title: movie.title,
          backgroundImg: movie.posterUrl,
          titleImg: movie.posterUrl,
          subTitle: movie.plot,
          ...movie,
        })
        console.log('Document written with ID: ', docRef.id)
      } catch (e) {
        console.error('Error adding document: ', e)
      }
    })
  }
}
