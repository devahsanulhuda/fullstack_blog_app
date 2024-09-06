import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "fullstack-blog-app-920e4.firebaseapp.com",
  projectId: "fullstack-blog-app-920e4",
  storageBucket: "fullstack-blog-app-920e4.appspot.com",
  messagingSenderId: "205171954042",
  appId: "1:205171954042:web:8147f45d9f5f159fd246c3",
};

export const app = initializeApp(firebaseConfig);
