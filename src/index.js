import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyB1dQ_FK5VfcBTcwWMLuU_8ZdS5d72QMhw",
  authDomain: "note-app-5e52b.firebaseapp.com",
  projectId: "note-app-5e52b",
  storageBucket: "note-app-5e52b.firebasestorage.app",
  messagingSenderId: "620357309026",
  appId: "1:620357309026:web:3d5eb407b8cbd39660f73b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}