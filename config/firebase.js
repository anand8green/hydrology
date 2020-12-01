import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDQEZJt0ldJUmVTgoBeYZbp7mjum5nvrYw",
    authDomain: "hydro-805d5.firebaseapp.com",
    databaseURL: "https://hydro-805d5.firebaseio.com",
    projectId: "hydro-805d5",
    storageBucket: "hydro-805d5.appspot.com",
    messagingSenderId: "366966558137",
    appId: "1:366966558137:web:f6952e6ed02164c9ee3a68"
};

const app = !firebase.apps.length ?
    firebase.initializeApp(firebaseConfig) :
    firebase.app()

const db = app.firestore()

export { db }
