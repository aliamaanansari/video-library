import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { collection, onSnapshot, doc, getDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCqH6a0Ibd5L7-MrxyWZCYU9c8GYP3RV6s',
  authDomain: 'videolibrary-e6766.firebaseapp.com',
  projectId: 'videolibrary-e6766',
  storageBucket: 'videolibrary-e6766.appspot.com',
  messagingSenderId: '29785153182',
  appId: '1:29785153182:web:7fe335769e0d01a825658f',
  measurementId: 'G-56JFHDYJV5',
  experimentalForceLongPolling: true, // this line
  useFetchStreams: false, //
}

const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()
const storage = getStorage(firebaseApp)

export { auth, provider, storage, onSnapshot, collection, doc, getDoc }
export default db
