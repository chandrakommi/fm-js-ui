import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAhXFV_n_opGttkJG5ey0gRgPZScxuBzVA',
  authDomain: 'react-file-manager-ui.firebaseapp.com',
  projectId: 'react-file-manager-ui',
  storageBucket: 'react-file-manager-ui.appspot.com',
  messagingSenderId: '844280725837',
  appId: '1:844280725837:web:12be810ecd716fc7153704',
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()

export { auth }
