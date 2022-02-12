import {initializeApp} from "firebase/app"
import {getFirestore,serverTimestamp} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCNSZJY6JBVRNyS6ZlWh7LWk0FzUhYx07I",
    authDomain: "playlist-app-5286c.firebaseapp.com",
    projectId: "playlist-app-5286c",
    storageBucket: "playlist-app-5286c.appspot.com",
    messagingSenderId: "486725172144",
    appId: "1:486725172144:web:ce3808f2c7f5601b82f475",
};

// init firebase

initializeApp(firebaseConfig)

// init services

const db = getFirestore()

const auth = getAuth()

// timestamp

const timestamp = serverTimestamp()

export {db,auth,timestamp}