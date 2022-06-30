import {getFirestore} from 'firebase/firestore'
import {initializeApp} from 'firebase/app'
import {getStorage}  from 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDE8Eshr2UQ3irhSqiMCkV1hI5lW95N3I",
  authDomain: "olx-clone-d9318.firebaseapp.com",
  projectId: "olx-clone-d9318",
  storageBucket: "olx-clone-d9318.appspot.com",
  messagingSenderId: "732447895088",
  appId: "1:732447895088:web:0a38fe26e866419446c7f5",
  measurementId: "G-WJVYYV6H1G"
};

const Firebase = initializeApp(firebaseConfig)

export const db = getFirestore(Firebase)
export const storage = getStorage(Firebase)