// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDxyfohvLU9LA6PPT_5Ay9BFIEghNztChc',
  authDomain: 'login-16673.firebaseapp.com',
  projectId: 'login-16673',
  storageBucket: 'login-16673.appspot.com',
  messagingSenderId: '542878767283',
  appId: '1:542878767283:web:6491ec9f7d9a90812c38c6',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
