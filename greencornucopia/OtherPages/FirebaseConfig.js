import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPMNcH_dm8xMyCfGrxRKNDQFIfrDEQUxI",
  authDomain: "rsa-project-c0952.firebaseapp.com",
  projectId: "rsa-project-c0952",
  storageBucket: "rsa-project-c0952.appspot.com",
  messagingSenderId: "329412978138",
  appId: "1:329412978138:web:114df97c8b1de047d98ce3"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);