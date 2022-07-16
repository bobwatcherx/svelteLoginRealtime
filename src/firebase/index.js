import { initializeApp } from "firebase/app";
import { 
 doc,
  setDoc,
    onSnapshot,
collection,
updateDoc,
query,
where,
getDocs,
addDoc,
getFirestore,
getDoc,
   } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBF9y2H43aKZFv7T6J3O_WQMHg5eYv_HTU",
  authDomain: "alpine-fin-228211.firebaseapp.com",
  databaseURL: "https://alpine-fin-228211.firebaseio.com",
  projectId: "alpine-fin-228211",
  storageBucket: "alpine-fin-228211.appspot.com",
  messagingSenderId: "51366506825",
  appId: "1:51366506825:web:af6df20c073747ae72aa98",
  measurementId: "G-ZS8GXK2Z0T"
};
export const app = initializeApp(firebaseConfig);

export {
  doc,
  setDoc,
    onSnapshot,
collection,
updateDoc,
query,
where,
getDocs,
addDoc,
getFirestore,
getDoc,
}
