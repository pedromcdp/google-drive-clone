import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAiDX7ggIJ3sT3Yt1ZFHCUFLJnZxp8APWk",
    authDomain: "drive-clone-897b3.firebaseapp.com",
    projectId: "drive-clone-897b3",
    storageBucket: "drive-clone-897b3.appspot.com",
    messagingSenderId: "955036238627",
    appId: "1:955036238627:web:c8d2760575c2ef9f590296"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()
  const db = firebaseApp.firestore()

  export {auth, provider, storage, db}