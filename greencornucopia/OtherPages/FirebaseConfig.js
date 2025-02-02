import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { AsyncStorage } from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyAPMNcH_dm8xMyCfGrxRKNDQFIfrDEQUxI",
  authDomain: "rsa-project-c0952.firebaseapp.com",
  projectId: "rsa-project-c0952",
  storageBucket: "rsa-project-c0952.appspot.com",
  messagingSenderId: "329412978138",
  appId: "1:329412978138:web:114df97c8b1de047d98ce3"
};

const firebaseApp = initializeApp(firebaseConfig);
// const firebaseAuth = initializeAuth(firebaseApp, {
//   persistence: getReactNativePersistence(AsyncStorage)
// });

export { firebaseApp };